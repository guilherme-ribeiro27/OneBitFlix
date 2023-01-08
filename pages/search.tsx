import React, { useEffect } from 'react'
import Head from 'next/head'
import HeaderAuth from '../src/components/common/headerAuth'
import styles from '../styles/search.module.scss'
import { useRouter } from 'next/router'
import courseService, { CourseType } from '../src/services/courseService'

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
        <main>
            <HeaderAuth/>
            {searchResults?.map((course)=>(
                <div key={course.id}>
                    <h1>{course.name}</h1>
                </div>
            ))}
        </main>
    </>
)
}

export default Search