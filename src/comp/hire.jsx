import React from "react";
import im1 from '/public/img/contact.ec9fd306.jpg'



function Hire(){

    return(
<>
<div className="cnt">

    <div><img src={im1} alt="" /></div>
    <div>
        <h1>Hire Me !</h1>
        <p>I am available for freelancing work. Please connect with me via phone:</p>
        <p><span>+923118105762</span> or email  <span>Shehryarkj916@gmail.com</span></p>
  <div id="inp">
   <input placeholder="Name" type="text" name="" id="" />
   <input placeholder="Email" type="text" />
   <input placeholder="Phone Number" type="text" />
   <input placeholder="Subject" type="text" />
   </div>
   <textarea placeholder="Write your message"  name="" id="inp2" cols="30" rows="0"></textarea>
   <br /><br /> <button className="btn1">Send Message</button>
    </div>

</div>

</>
    )
}
export default Hire;