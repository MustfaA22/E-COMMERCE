import React from "react";
import './Catcard.css'
import { Link } from "react-router-dom";

const Catcard=(props)=>{
    return(
      <Link to={props.path}>
        <div class="card col-3  mt-5" >
        <img src={props.img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.desc}</p>
          <p class="card-text">{props.price}د.ع</p>
          <a href="#" class="btn btn-primary">شاهد المنتجات</a>
        </div>
      </div>
      </Link>
    )
}
export default Catcard