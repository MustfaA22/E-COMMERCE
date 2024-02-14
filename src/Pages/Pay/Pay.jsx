import axios from "axios";
import React, { useEffect, useState } from "react";
import Catcard from "../../Components/Catcard/Catcard";



const pay =()=>{
    const url = window.location.href;
    const IDpackage = url.match(/\/(\d+)$/)[1];
    const [products,setproduct]=useState([])
    const [oneproduct,setoneproduct]=useState([])
    const getdata=()=>{
        axios.get("https://localhost:7164/api/getproducts").then((res)=>{
          setproduct(res.data)
          const filtredata=res.data.find((el)=>el.id==IDpackage)
          setoneproduct(filtredata)

        })
    }
    const senddata=()=>{
     const data =
        {
            "id": 0,
            "name": oneproduct.name,
            "description": oneproduct.description,
            "price": oneproduct.price
          }
          axios.post("https://localhost:7164/api/createAccount",data).then((res)=>{
            if(res.status==200){
             window.history.push("/")
            }}
          )
     
    }
    useEffect(()=>{
        getdata();
        console.log(oneproduct)
    },[])
    return(

        <div>
            <button onClick={senddata}>شراء المنتج</button>
            <div className="row justify-content-center">
              {products.filter((el)=>el.id==IDpackage).map((el)=>{
                return(
                    <Catcard name={el.name} desc={el.description} img={el.img} price={el.price}/>
                )
              })}
            </div>
        </div>
    )
}
export default pay