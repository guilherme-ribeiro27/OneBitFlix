/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Container, Form, Input } from 'reactstrap';
import styles from './styles.module.scss';
import Modal from 'react-modal'
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { profileService } from '../../../services/profileService';

Modal.setAppElement("#__next");

const HeaderAuth = () => {
    const router = useRouter();
    const [modalIsOpen, setModalOpen] = useState(false);
    const [searchName, setSearchName] = useState("")
    const [initials, setInitials] = useState("");

    const handleSearch = async(e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push(`/search?name=${searchName}`)
        setSearchName("")
    }
    const handleSearchClick = ()=>{
        router.push(`/search?name=${searchName}`)
        setSearchName("")
    }
    useEffect(()=>{
        profileService.fetchCurrent().then(user=>{
            const firstNameInitial = user.firstName.slice(0,1);
            const lastNameInitial = user.lastName.slice(0,1);
            setInitials(`${firstNameInitial}${lastNameInitial}`);
        })
    },[])
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
                    <Form onSubmit={handleSearch}>
                        <Input type="search" name="search" id="search" placeholder="Pesquisar" className={styles.input} value={searchName} onChange={(e)=>{setSearchName(e.currentTarget.value.toLowerCase())}}/>
                    </Form>
                    <img src="/homeAuth/iconSearch.svg" alt="LupaHeader" className={styles.searchImg} onClick={handleSearchClick}/>
                    <p className={styles.userProfile} onClick={handleOpenModal}>{initials}</p>
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