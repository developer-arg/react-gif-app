import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGift = (category) => {
        
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async (category) => {
        await getGifts(category)
            .then((imgs) => 
                { 
                    setImages(imgs); 
                    setIsLoading(false);
                });
    };

    useEffect(() => {
        getImages(category);
    }, []);

    return {
        images,
        isLoading
    }
}
