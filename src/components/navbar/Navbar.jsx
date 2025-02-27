
 import './../navbar/Navbarr.css';
 import  Logo from './../../assets/project-Logo.png';
 import Image from './../navbar/main-Image.jpeg';

export default function Navbar(){
    return(
        <div>
            <div className="navbar-Container">
                 <span className='logo-Container'> <img src= {Logo} className="Navbar-Logo"></img></span>
             <div className="navbar-Heading">
               <span className='navbar-Text'><a href="./../../index" className='remove-Name'>Home</a></span> 
               <span className='navbar-Text'><a href="./../../view/services"className='remove-Name'>Services</a></span> 
               <span className='navbar-Text'><a href="./../../view/about"className='remove-Name'>About</a></span> 
               <span className='navbar-Text'><a href="./../../view/bolgs"className='remove-Name'>Bolgs</a></span>
            </div>
            </div>
            <img src={Image} className='main-Image'></img>

        </div>
    )
}