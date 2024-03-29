import Head from 'next/head';
import styles from '../../../styles/episodePlayer.module.scss';
import HeaderGeneric from '../../../src/components/common/headerGeneric';
import { useRouter } from 'next/router';
import courseService, { CourseType } from '../../../src/services/courseService';
import { useEffect, useState } from 'react';
import PageSpinner from '../../../src/components/common/spinner';
import { Button, Container } from 'reactstrap';
import ReactPlayer from 'react-player';

function EpisodePlayer() {
    const router = useRouter()
    const [course, setCourse] = useState<CourseType>()
    const episodeOrder = parseFloat(router.query.id?.toString() || "")
    const courseId = router.query.courseid?.toString() || ""

    const getCourse = async function () {
      const res = await courseService.getEpisodes(courseId)

      if(res.status === 200){
        setCourse(res.data)
      }
    }

    const handleLastEpisode = ()=>{
      router.push(`/course/episode/${episodeOrder - 1}?courseid=${courseId}`)
    }
    const handleNextEpisode = ()=>{
      router.push(`/course/episode/${episodeOrder + 1}?courseid=${courseId}`)
    }
    useEffect(() => {
      getCourse()
    }, [courseId])
    
    if(course?.episodes === undefined) return <PageSpinner/>
    return (
      <>
          <Head>
              <title>Onebitflix - {course.episodes[episodeOrder].name}</title>
              <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
          </Head>
          <main>
              <HeaderGeneric logoUrl='/home' btnContent={"Voltar para o curso"} btnUrl={`/course/${courseId}`}/>
              <Container className='d-flex flex-column align-items-center gap-3 pt-3'>
                <p className={styles.episodeTitle}>
                  {course.episodes[episodeOrder].name}
                </p>
                {typeof window === 'undefined' ? null : (
                  <ReactPlayer classname={styles.player} url={`${process.env.NEXT_PUBLIC_BASEURL}/episodes/stream?videoUrl=${course.episodes[episodeOrder].videoUrl}&token=${sessionStorage.getItem('onebitflix-token')}`} controls style={{ maxWidth: '100%'}}/>
                )}
                <div className={styles.episodeButtonDiv}>
                  <Button className={styles.episodeButton} disabled={episodeOrder === 0 ? true : false} onClick={handleLastEpisode}>
                    <img src="/episode/iconArrowLeft.svg" alt="setaEsquerda" className={styles.arrowImg} />
                  </Button>
                  <Button className={styles.episodeButton} disabled={episodeOrder + 1 === course.episodes.length ? true : false} onClick={handleNextEpisode}>
                    <img src="/episode/iconArrowRight.svg" alt="setaDireita" className={styles.arrowImg} />
                  </Button>
                </div>
                <p className='text-center py-4'>
                  {course.episodes[episodeOrder].synopsis}
                </p>
              </Container>
          </main>
      </>
    )
}

export default EpisodePlayer