import React from "react";
import '/src/App.css'
import p1 from '/public/img/project-img1.jpg'
import p2 from '/public/img/project-img2.jpg'
import p3 from '/public/img/project-img3.jpg'
import p4 from '/public/img/project-img4.jpg'
import p5 from '/public/img/project-img5.jpg'
import p6 from '/public/img/project-img6.jpg'

function Projects(){
return(


    <>
    <br /><br /><br />
    <h2 id="h2">My Projects</h2>
    <br /><br />
    <div className="pro">
        <div> <img src={p1} alt="" /> <div id="span">App Landing</div></div>
        <div> <img src={p2} alt="" /> <div id="span">App Landing</div></div>
        <div> <img src={p3} alt="" /> <div id="span">App Landing</div></div>
        <div> <img src={p4} alt="" /> <div id="span">App Landing</div></div>
        <div> <img src={p5} alt="" /> <div id="span">App Landing</div></div>
        <div> <img src={p6} alt="" /> <div id="span">App Landing</div></div>
    </div>
        <div className="btn">
            <button>Viwe more > </button>
        </div>
    
    </>
)


    
}
export default Projects;