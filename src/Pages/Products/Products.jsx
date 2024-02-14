import React, { useEffect, useState } from "react";
import axios from "axios";
import Catcard from "../../Components/Catcard/Catcard";


const Prooducts=()=>{
    const url = window.location.href;
  const IDpackage = url.match(/\/(\d+)$/)[1];
    const[products,setproducts]=useState([])
  const getproducts=()=>{
    axios.get("https://localhost:7164/api/getproducts").then((res)=>{
     setproducts(res.data)
    })
  }
  useEffect(()=>{
    getproducts();
},[])
    return(
        <div>
            <h1 className="text-center m-3 fw-bold text-danger">تعرف على المنتجات الكثيرة في قسم {IDpackage==1?"الالكترونيات":IDpackage==2?"الالعاب":IDpackage==3?"الاكسسورات":"الطعام"}</h1>
            <div>
            <div className="row p-5 m-5 ">
                {products?.filter((el)=>el.categoryId==IDpackage).map((el)=>{
                    return(
                        
                        <Catcard name={el.name} desc={el.description} img={el.img} price={el.price}/>
                     
                    )
                })}
                </div>
            </div>
        </div>
    )
}
export default Prooducts