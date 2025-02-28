
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

               <div className='hero-Container'>

                <div className='hero-Text'>
                  <span className='hero-head'>Agrimart <br></br>Farm Fresh <br></br> Products</span> 
                </div>

                <div className='hero-Content'>
                <span className='hero-paragraph'>Fresh agri products bring the goodness of nature straight to your table, ensuring quality, nutrition, and<br></br> flavor in every bite</span> <br></br>
                <span className='hero-paragraph'>Our website connects you directly with local farmers, offering a range of farm-fresh organic products delivered straight to your door. We ensure quality, sustainability, and fair pricing.</span>
                </div>

                </div>
            
               

        </div>
    )
}