import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import { useDispatch, } from "react-redux";
import { setNewDishes, setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import { Dispatch  } from "@reduxjs/toolkit"
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import "../../../css/home.css"


/** Redux Slice & Selector */
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
    setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
});


export default function HomePage() {
 const { setPopularDishes, setNewDishes } = actionDispatch(useDispatch())
//Selector: Store => Data 
// console.log("process.env.REACT_APP_API_URL:", process.env.REACT_APP_API_URL);

useEffect(() => {
    //Backend server data fetch => Data
    const product = new ProductService();
    product
        .getProducts({
            page: 1,
            limit: 4,
            order: "productViews",
            // productCollection: ProductCollection.DISH,
        })
        .then((data) => {
            // console.log("data passed here:", data);
            setPopularDishes(data);
        })
        .catch((err) => console.log(err));

        product
        .getProducts({
            page: 1,
            limit: 4,
            order: "createAt",
            productCollection: ProductCollection.DISH,
        })
        .then((data) => {
            setNewDishes(data);
        })
        .catch((err) => console.log(err));
}, []);


// useEffect(() => {
//     // // Backend server data request => Data 
//     // const result = [
//     //         {
//     //             "_id": "66fa49a6f07df4052bda2d11",
//     //             "productStatus": "PROCESS",
//     //             "productCollection": "DISH",
//     //             "productName": "Steak",
//     //             "productPrice": 999,
//     //             "productLeftCount": 66,
//     //             "productSize": "NORMAL",
//     //             "productVolume": 1,
//     //             "productDesc": "this is good",
//     //             "productImages": [
//     //                 "uploads/products/00873cff-48cd-4264-883d-241286e65473.png",
//     //                 "uploads/products/9cb16dfd-6897-48fd-b201-c23b67613ff1.jpg",
//     //                 "uploads/products/4c8c44ed-3f3f-4dd2-ae62-abdb494222e4.jpg"
//     //             ],
//     //             "productViews": 2,
//     //             "createdAt": "2024-09-30T06:48:06.981Z",
//     //             "updatedAt": "2024-10-22T07:33:17.475Z",
//     //             "__v": 0
//     //         },
//     //         {
//     //             "_id": "66fc0329cc18da50811acb1b",
//     //             "productStatus": "PROCESS",
//     //             "productCollection": "DISH",
//     //             "productName": "shashlik",
//     //             "productPrice": 12,
//     //             "productLeftCount": 21,
//     //             "productSize": "NORMAL",
//     //             "productVolume": 1,
//     //             "productDesc": "Eng zori!",
//     //             "productImages": [
//     //                 "uploads/products/9d81be66-8c4d-47dd-a232-32ed18d42258.png"
//     //             ],
//     //             "productViews": 0,
//     //             "createdAt": "2024-10-01T14:11:53.178Z",
//     //             "updatedAt": "2024-10-22T09:03:53.596Z",
//     //             "__v": 0
//     //         },
//     //     ];

//     // //Slice: Data => Store
//     // //@ts-ignore
//     // setPopularDishes(result);
// }, []);

    return(
    <div className={"homepage"}>
        <Statistics/>
        <PopularDishes />
        <NewDishes />
        <Advertisement />
        <ActiveUsers />
        <Events />
    </div>
    );
}
    