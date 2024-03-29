import React, { useEffect } from "react";
import './Home.css'
import Catcard from "../../Components/Catcard/Catcard";
import axios from "axios";
import { useState } from "react";

const Home=()=>{
   const [data,setdata]=useState([])
   const getdata=()=>{
    axios.get("https://localhost:7164/api/getallcAT").then((res)=>{
        setdata(res.data)
    })
   }
   useEffect(()=>{
    getdata();
   },[])
    return(
        <div>
            <div className="bg-div">
                <div className="row justify-content-center gap-4">
                 {data?.map((el)=>{
                    return(
                    <Catcard name={el.catname} desc={el.catdescription} img={"https://cdn.salla.sa/zpDz/lroCXh23FAkNHIU1HvJ8dJkE98W9Agz4QUjDsK1l.jpg"} 
                    path={`products/${el.id}`}/>
                    )
                })}
                </div>
            
            </div>
            <h1>lsdklskd</h1>
        </div>
    )
}
export default Home