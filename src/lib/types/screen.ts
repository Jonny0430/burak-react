import { Member } from "./member";
import { Product } from "./product";



// React App State 
export interface AppRootState {
    homePage: HomePageState;
}
 /** HomePage **/
export interface HomePageState {
    popularDishes: Product[];
    newDished: Product[];
    topUsers: Member[];
}

 /** Products Page **/
 /** Orders Page **/