import React from "react";
import '/src/App.css'
import img2 from '/public/img/banner-profile.9018336a.jpeg'
import img3 from '/public/img/shape1.d14ccde1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
 import { faPrint } from "@fortawesome/free-solid-svg-icons";
 import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

 function Home(){

return(

    <>
 <div className="front">
    <div><h4 className="spn">Hello I'm</h4> 
    <h1>$HEHRYAR</h1>
    <h2>Digital Product Designer</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        Connect With Me</p> <button className="btn1"> Connect With me</button></div>

    <div><img className="img2" src={img2} alt="" /> <img className="img3" src={img3} alt="" /></div>
 </div>
 <br /><br />
 
 <hr />
    <div>

        <h2 className="expo" id="h2">My Expeirence</h2><hr />
        <div className="exp">
            <div><span className="spn1">
            <FontAwesomeIcon className="i" icon={faClone} /></span><br /> <h5>Product Design</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum suscipit hic doloremque quasi optio minima.</p></div>
            <div><span className="spn1">
            <FontAwesomeIcon className="i" icon={faDesktop} /></span><br /><h5>Web Design</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum suscipit hic doloremque quasi optio minima.</p></div>
            <div><span className="spn1">
            <FontAwesomeIcon className="i" icon={faImage} /></span><br /> <h5>Branding & Logo</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum suscipit hic doloremque quasi optio minima.</p></div>
            <div><span className="spn1">
            <FontAwesomeIcon className="i" icon={faPrint} /></span><br /><h5>Print Design</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum suscipit hic doloremque quasi optio minima.</p></div>
            <div><span className="spn1">
            <FontAwesomeIcon className="i" icon={faMobileScreenButton} /><br /></span><h5>App Design</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum suscipit hic doloremque quasi optio minima.</p></div>
            <div><span> 
            <FontAwesomeIcon className="i1" icon={faImage} /></span><br /><h5>Motion & Animation</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, harum suscipit hic doloremque quasi optio minima.</p></div>
        </div>
    </div>
    
    </>
)




}
export default Home