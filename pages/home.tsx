import Head from "next/head"
import FavoriteCategory from "../src/components/homeAuth/favoriteCategory"
import FeaturedCategory from "../src/components/homeAuth/featuredCategory"
import FeaturedSection from "../src/components/homeAuth/featuredSection"
import ListCategories from "../src/components/homeAuth/listCategories"
import NewestCategory from "../src/components/homeAuth/newestCategory"

const HomeAuth = ()=>{
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
            </main>
        </>
    )
}
export default HomeAuth