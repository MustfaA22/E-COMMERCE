import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Prooducts from "../../Pages/Products/Products";




const Router=()=>{

    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products/:id"element={<Prooducts/>}/>

        </Routes>
    )
}
export default Router;