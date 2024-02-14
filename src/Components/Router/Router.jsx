import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Prooducts from "../../Pages/Products/Products";
import Pay from "../../Pages/Pay/Pay";




const Router=()=>{

    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products/:id"element={<Prooducts/>}/>
        <Route path="pay/:id"element={<Pay/>}/>

        </Routes>
    )
}
export default Router;