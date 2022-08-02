/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Container, Form, Input } from 'reactstrap';
import styles from './styles.module.scss';
import Modal from 'react-modal'
import { useState } from 'react';
import { useRouter } from 'next/router';

Modal.setAppElement("#__next");

const HeaderAuth = () => {
    const router = useRouter();
    const [modalIsOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    }
    const handleCloseModal = () => {
        setModalOpen(false);
    }

    const HandleLogOut = ()=>{
        sessionStorage.clear()
        router.push('/')
    }
    return (
        <>
            <Container className={styles.nav}>
                <Link href='/home'>
                    <img src="/logoOnebitflix.svg" alt="LogoOnebitflix" className={styles.imgLogoNav}/>
                </Link>
                <div className='d-flex align-items-center'>
                    <Form>
                        <Input type="search" name="search" id="search" placeholder="Pesquisar" className={styles.input} />
                    </Form>
                    <img src="/homeAuth/iconSearch.svg" alt="LupaHeader" className={styles.searchImg} />
                    <p className={styles.userProfile} onClick={handleOpenModal}>AB</p>
                </div>
                <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} shouldCloseOnEsc={true} className={styles.modal} overlayClassName={styles.overlayModal}>
                    <Link href='/profile'>
                        <p className={styles.modalLink}>Meus dados</p>
                    </Link>
                    <p className={styles.modalLink} onClick={HandleLogOut}>Sair</p>
                </Modal>
            </Container>
        </>
    )
}
export default HeaderAuth;