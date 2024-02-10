import React from "react";
import img_1 from "../../assets/logo.png"
import './Navbar.css'


const Navbar=()=>{
    return(
       <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class=" d-flex gap-5 align-items-center">
    
   
     <div className="d-flex  gap-3 fs-5 align-items-center">
        <div>
          <img className="mx-5" src={img_1} alt="" width={"100px"} />
        </div>
        <div>
            <h1 className="fs-4">الالكترونيات</h1>
        </div>
        <div >
            <h1 className="fs-4">الالكترونيات</h1>
        </div>
        <div>
            <h1 className="fs-4">الالكترونيات</h1>
        </div>
        <div>
            <h1 className="fs-4">الالكترونيات</h1>
        </div>
     </div>
     <div>
       <button className="nav-lang-button">
        EN
       </button>
     </div>
     
    </div>
  
</nav>
       </div>
    )
}
export default Navbar;