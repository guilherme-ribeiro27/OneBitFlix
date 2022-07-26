import Link from 'next/link';
import { Button, Container } from 'reactstrap';
import { CourseType } from '../../../services/courseService';
import SlideComponent from '../../common/slideComponent';
import styles from './styles.module.scss';

interface props{
    newestCourses: CourseType[];
}

const SlideSection = ({newestCourses}:props) => {
    return (
        <>
        <Container>
            <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
            <SlideComponent course={newestCourses}/>
            <Link href='/register'>
                <Button className={styles.slideSectionBtn} outline color='light'>Se cadastre para acessar</Button>
            </Link>
        </Container>
        </>
    )
}
export default SlideSection;