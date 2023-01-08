import React, { useEffect } from 'react'
import Head from 'next/head'
import HeaderAuth from '../src/components/common/headerAuth'
import styles from '../styles/search.module.scss'
import { useRouter } from 'next/router'
import courseService, { CourseType } from '../src/services/courseService'
import { Container } from 'reactstrap'
import { SearchCard } from '../src/components/searchCard'
import Footer from '../src/components/common/footer'

const Search = () => {
    const router = useRouter()
    const [searchResults, setSearchResults] = React.useState<CourseType[]>([])

    const searchName : any = router.query.name != "" ? router.query.name : "Pesquisa"

    const searchCourses = async ()=>{

        const res  = await courseService.getSearch(searchName)
        setSearchResults(res.data.courses)

    }
    useEffect(() => {
      searchCourses()
    }, [searchName])
    
    return (
    <>
        <Head>
            <title>Onebitflix - {searchName}</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main className={styles.main}>
            <div className={styles.headerFooterBg}>
                <HeaderAuth/>
            </div>
            {searchResults.length >= 1 ? (
                <div className={styles.searchContainer}>
                    <Container className='d-flex flex-wrap justify-content-center gap-5 py-4'>
                    {searchResults?.map((course)=>(
                        <SearchCard key={course.id} course={course}/>
                    ))}
                </Container>
                </div>
            ) : (
                <div className={styles.searchContainer}>
                    <p className={styles.noSearchResult}>Nenhum resultado encontrado</p>
                </div>
            )}
            <div className={styles.headerFooterBg}>
                <Footer/>
            </div>
        </main>
    </>
)
}

export default Search