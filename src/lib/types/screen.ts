


// React App State 
export interface AppRootState {
    homePage: HomePageState;
}

export interface HomePageState {
    popularDishes: [];
    newDished: [];
    topUsers: [];
}