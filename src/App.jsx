import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../public/img/logo.031577b3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './comp/home';
import Projects from './comp/projects';
import skil1 from '/public/img/skills-img1.png'
import skil2 from '/public/img/skills-img2.png'
import skil3 from '/public/img/skills-img3.png'
import skil4 from '/public/img/skills-img4.png'
import Edu from './comp/edu'
import Hire from './comp/hire';
function App() {
  return (
    <>
    
      <Navbar className='d3' bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><img  src={img1} alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='d2' href="/">Home  <div className="d1"><li>list style 1</li><li></li><li></li></div>
             </Nav.Link>
            <Nav.Link className='d2' href="#features">Services   <div className="d1"><li>list style 1</li><li></li><li></li></div>
            </Nav.Link>
            <Nav.Link className='d2' href="#pricing">About Us   <div className="d1"><li>list style 1</li><li></li><li></li></div>
            </Nav.Link>
            <Nav.Link className='d2' href="#pricing">Portfolio   <div className="d1"><li>list style 1</li><li></li><li></li></div>
            </Nav.Link>
            <Nav.Link className='d2' href="#pricing">Pages   <div className="d1"><li>list style 1</li><li></li><li></li></div>
            </Nav.Link>
            <Nav.Link className='d2' href="#pricing">Blog   <div className="d1"><li>list style 1</li><li></li><li></li></div>
            </Nav.Link>
            <Nav.Link className='d2' href="#pricing">Contact Us   <div className="d1"><li>list style 1</li><li></li><li></li></div>
            </Nav.Link>
            <button className='btn1'>Get Started</button>
       
           
          </Nav>
        </Container>
      </Navbar>
      <br /><br />
    <Home/>
    <Projects/>
    <hr />
    <br /><br />
    
    <h2 className='ski' id='h2'>My Skills</h2>
    <p id='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
       incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      <br /><br /><div className="skil">
        <div><img src={skil1} alt="" /></div>
        <div><img src={skil2} alt="" /></div>
        <div><img src={skil3} alt="" /></div>
        <div><img src={skil4} alt="" /></div>
      </div>
      <br /><br /><br />
      <hr />
      <Edu/>
      <Hire/>
    </>
  );
}

export default App;