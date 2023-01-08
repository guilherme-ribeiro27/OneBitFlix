import useSWR from "swr";
import categoryService, { CategoryType } from "../../../services/categoryService";
import ListCategoriesSlide from "../listCategoriesSlide";
import PageSpinner from "../../common/spinner";

const ListCategories = () => {
    const {data, error} = useSWR("/listCategories", categoryService.getCategories)

    if(error) return error;
    if(!data) return (<PageSpinner/>)
    return (
        <>
            {
                data.data.categories?.map((category: CategoryType)=>(
                    <ListCategoriesSlide key={category.id} categoryId={category.id} categoryName={category.name}/>
                ))
            }
        </>
    )
}
export default ListCategories;