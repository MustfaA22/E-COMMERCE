import React from "react";
import './Catcard.css'

const Catcard=(props)=>{
    return(
        <div class="card col-3  mt-5" >
        <img src={props.img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.desc}</p>
          <a href="#" class="btn btn-primary">شاهد المنتجات</a>
        </div>
      </div>
    )
}
export default Catcard