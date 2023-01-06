import React, { FormEvent, useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from '../../../../styles/profile.module.scss'
import { profileService } from '../../../services/profileService'
import ToastComponent from '../../common/toast'

export default function PasswordForm() {
    const [ currentPassword, setCurrentPassword ] = useState('')
    const [ newPassword, setNewPassword ] = useState('')
    const [ confirmNewPassword, setConfirmNewPassword ] = useState('')
    const [color, setColor] = useState('')
    const [toastIsOpen, setToastIsOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
      profileService.fetchCurrent().then((password)=>{
        setCurrentPassword(password.currentPassword)
        setNewPassword(password.newPassword)
      })
    
    }, [])
    const handlePasswordUpdate = async(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if(newPassword != confirmNewPassword){
            setErrorMessage("As senhas não conferem")
            setColor("bg-danger")
            setToastIsOpen(true)
            setTimeout(()=>{
                setToastIsOpen(false),3000
            })
            return
        }
        if(currentPassword == newPassword){
            setToastIsOpen(true)
            setErrorMessage("Não coloque a nova senha igual a antiga")
            setColor("bg-danger")
            setTimeout(()=>{
                setToastIsOpen(false),3000
            })
            return
        }
        const res = await profileService.passwordUpdate({currentPassword, newPassword})
        if(res.status === 204){
            setToastIsOpen(true)
            setErrorMessage("Senha alterada com sucesso!")
            setColor("bg-success")
            setTimeout(()=>{
                setToastIsOpen(false),3000
            })
            setCurrentPassword("")
            setNewPassword("")
            setConfirmNewPassword("")
        }
        else if(res == 400){
            setToastIsOpen(true)
            setErrorMessage("Senha atual incorreta")
            setColor("bg-danger")
            setTimeout(()=>{
                setToastIsOpen(false),3000
            })
        }
    }
    
  return (
    <>
        <Form className={styles.form} onSubmit={handlePasswordUpdate}>
            <div className={styles.inputNormalDiv}>
                <FormGroup>
                    <Label className={styles.label} for="currentPassword">SENHA ATUAL</Label>
                    <Input type="password" name="currentPassword" id="currentPassword" placeholder="*******" required minLength={6} maxLength={12} className={styles.input}  value={currentPassword} onChange={(e)=>{ setCurrentPassword(e.currentTarget.value)}}/>
                </FormGroup>
            </div>
            <div className={styles.inputFlexDiv}>
                <FormGroup>
                    <Label className={styles.label} for="newPassword">NOVA SENHA</Label>
                    <Input type="password" name="newPassword" id="newPassword" placeholder="*******" required minLength={6} maxLength={12} className={styles.inputFlex} value={newPassword} onChange={(e)=>{ setNewPassword(e.currentTarget.value)}}/>
                </FormGroup>
                <FormGroup>
                    <Label className={styles.label} for="confirmNewPassword">CONFIRMAR NOVA SENHA</Label>
                    <Input type="password" name="confirmNewPassword" id="confirmNewPassword" placeholder="*******" required minLength={6} maxLength={12} className={styles.inputFlex} value={confirmNewPassword} onChange={(e)=>{ setConfirmNewPassword(e.currentTarget.value)}}/>
                </FormGroup>
            </div>
            <Button className={styles.formBtn} outline type='submit'>
                Salvar alterações
            </Button>
        </Form>
        <ToastComponent color={color} isOpen={toastIsOpen} message={errorMessage}/>
    </>
  )
}
