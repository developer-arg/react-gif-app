import { useState } from "react"
import { AddCategory } from "./AddCategory";
import { GiftGrid } from "./GiftGrid";

export const GifExpertApp = () => {    

    const [categories, setCategories] = useState([]);

    // const getCall = async () => {
    //     const request = await fetch("http://localhost:5274/");
    //     const data = await request.json();
    //     console.log(data);
    // };

    const onAddCategory = (newItem) => {

        //if(categories.includes(newItem)) return;
        if (categories.some(category => category.toLowerCase() === newItem.toLowerCase())) return;

        setCategories([newItem, ...categories]);
    }

    return (
        <>
            {/* Titulo */}
            <h3>Fetch Gifts Quickly App</h3>

            {/* Input */}
            <AddCategory onNewCategory={(inputValue) => onAddCategory(inputValue)} />


            {
                categories.map((category) => (
                    <GiftGrid key={category} category={category} />
                ))
            }


        </>
    )
}
