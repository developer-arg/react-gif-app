import { GiftItem } from "./GiftItem";
import { useFetchGift } from "./Hooks/useFetchGift";

export const GiftGrid = ({ category }) => {

    const {images, isLoading} = useFetchGift(category);


    return (
        <>
            <h4><center>{category.charAt(0).toUpperCase() + category.slice(1)}</center></h4>
            {isLoading && <h3>Cargando...</h3>}

            <div className="card-grid">
                {images.map((image) =>
                (
                    <GiftItem key={image.id} {...image} />
                ))}
            </div>
        </>
    )
}
