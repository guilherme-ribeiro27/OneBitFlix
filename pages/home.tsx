import Head from "next/head"
import Footer from "../src/components/common/footer"
import FavoriteCategory from "../src/components/homeAuth/favoriteCategory"
import FeaturedCategory from "../src/components/homeAuth/featuredCategory"
import FeaturedSection from "../src/components/homeAuth/featuredSection"
import ListCategories from "../src/components/homeAuth/listCategories"
import NewestCategory from "../src/components/homeAuth/newestCategory"
import { useRouter } from "next/router"
import { useEffect } from "react"

const HomeAuth = ()=>{
    const router = useRouter()
    
    useEffect(()=>{
        console.log(sessionStorage.getItem('onebitflix-token'))
        if(sessionStorage.getItem('onebitflix-token') == null)
            router.push('/login')
    },[])

    return (
        <>
            <Head>
                <title>Onebitflix - home</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <FeaturedSection/>
                <NewestCategory/>
                <FavoriteCategory/>
                <FeaturedCategory/>
                <ListCategories/>
                <Footer/>
            </main>
        </>
    )
}
export default HomeAuth