/* eslint-disable @next/next/no-img-element */
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from '../../../../styles/profile.module.scss'

const UserForm = () =>{
    return <>
    <Form className={styles.form}>
        <div className={styles.formName}>
            <p className={styles.nameAbbreviation}>NT</p>
            <p className={styles.userName}>NAME TESTE</p>
        </div>
        <div className={styles.memberTime}>
            <img className={styles.memberTimeImg} src="/profile/iconUserAccount.svg" alt="iconProfile"  />
            <p className={styles.memberTimeText}>Membro desde <br />20 de Abril de 2020</p>
        </div>
        <hr />
        <div className={styles.inputFlexDiv}>
            <FormGroup>
                <Label for="firstName" className={styles.label}>
                    NOME
                </Label>
                <Input
                    name="firstName"
                    type="text"
                    id="firstName"
                    placeholder="Qual o seu primeiro nome?"
                    required
                    maxLength={20}
                    className={styles.inputFlex}
                    value={"Name"}
                    autoComplete="off"
                />
            </FormGroup>
            <FormGroup>
                <Label for="lastName" className={styles.label}>
                    SOBRENOME
                </Label>
                <Input
                    name="lastName"
                    type="text"
                    id="lastName"
                    placeholder="Qual o seu último nome?"
                    required
                    maxLength={20}
                    className={styles.inputFlex}
                    value={"Teste"}
                />
            </FormGroup>
        </div>
        <div className={styles.inputNormalDiv}>
            <FormGroup>
                <Label for="phone" className={styles.label}>
                    WHATSAPP / TELEGRAM
                </Label>
                <Input
                    name="phone"
                    type="tel"
                    id="phone"
                    placeholder="(xx) 9xxxx-xxxx"
                    required
                    className={styles.input}
                    value={"+55 (21) 99999-9999"}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email" className={styles.label}>
                    EMAIL
                </Label>
                <Input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Coloque o seu email"
                    required
                    className={styles.input}
                    value={"testeemail@gmail.com"}
                />
            </FormGroup>
            <Button className={styles.formBtn} outline type="submit">
                Salvar Alterações
            </Button>
        </div>
    </Form>
    </>
}

export default UserForm