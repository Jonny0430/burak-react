import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";



// React App State 
export interface AppRootState {
    ordersPage: any;
    productsPage: any;
    homePage: HomePageState;
}
 /** HomePage **/
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}

 /** Products Page **/
export interface ProductsPageState {
    restaurant: Member | null;
    chosenProduct: Product | null;
    products: Product[];
}

 /** Orders Page **/

 export interface OrdersPageState {
    pausedOrders: Order[];
    processOrders: Order[];
    finishedOrders: Order[];
 }