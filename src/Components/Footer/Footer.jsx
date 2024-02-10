import React from "react";
import './Footer.css'
import img_1 from "../../assets/logo.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import whatsapp from "../../assets/whatsapp.png"



const Footer=()=>{
    return(
        <div>
            <div className="footer-all">
          <div className="  mx-5 d-flex justify-content-between align-items-center">
            <div>
              <img src={img_1} alt="" width={"100px"} />
            </div>
            <div>
                <h1 className="fs-6 mt-5 pt-3">Developed by <spna className="fw-bold text-danger fs-3">Mustfa Ahmed</spna></h1>
            </div>
            <div className="d-flex gap-3 mt-2">
                 
                 <div>
                    <img className="footer-img" src={facebook} alt="" width={"50px"} />
                 </div>
                  
                 <div>
                    <img className="footer-img" src={instagram} alt="" width={"50px"} />
                 </div>
                  
                 <div>
                    <img className="footer-img" src={whatsapp} alt="" width={"50px"} />
                 </div>

            </div>
          </div>
            </div>

        </div>
    )
}
export default Footer;

