import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from '../../../../styles/profile.module.scss'

export default function PasswordForm() {
  return (
    <>
        <Form className={styles.form}>
            <div className={styles.inputNormalDiv}>
                <FormGroup>
                    <Label className={styles.label} for="currentPassword">SENHA ATUAL</Label>
                    <Input type="password" name="currentPassword" id="currentPassword" placeholder="*******" required minLength={6} maxLength={12} className={styles.input} />
                </FormGroup>
            </div>
            <div className={styles.inputFlexDiv}>
                <FormGroup>
                    <Label className={styles.label} for="newPassword">NOVA SENHA</Label>
                    <Input type="password" name="newPassword" id="newPassword" placeholder="*******" required minLength={6} maxLength={12} className={styles.inputFlex} />
                </FormGroup>
                <FormGroup>
                    <Label className={styles.label} for="confirmNewPassword">CONFIRMAR NOVA SENHA</Label>
                    <Input type="password" name="confirmNewPassword" id="confirmNewPassword" placeholder="*******" required minLength={6} maxLength={12} className={styles.inputFlex} />
                </FormGroup>
            </div>
            <Button className={styles.formBtn} outline>
                Salvar alterações
            </Button>
        </Form>
    </>
  )
}
