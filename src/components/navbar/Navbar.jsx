
import './../navbar/Navbarr.css';
import './../../../src/secondary.css';
import Logo from './../../assets/project-Logo.png';
import Image from './../navbar/main-Image.jpeg';
import Cow from './../navbar/cow.9dfa9d469820c38aab61.png';
import Flower from './../navbar/flower.24fd713663897804bcb2.png';
import Farmer from './../navbar/farm.png';
import Earth from './../navbar/earth.0b9cdbcbe4284655c245.png';
import Trak from './../navbar/tract.3159894a3d7326a93f87.png';
import Vegetables from './../navbar/vegetable.164d2731f5f12bc80d38.png';
import Choose  from './../navbar/leaf.png';

export default function Navbar() {
  return (
    <div>
      <div className="navbar-Container">
        <span className='logo-Container'> <img src={Logo} className="Navbar-Logo"></img></span>
        <div className="navbar-Heading">
          <span className='navbar-Text'><a href="./../../index" className='remove-Name'>Home</a></span>
          <span className='navbar-Text'><a href="./../../view/services" className='remove-Name'>Services</a></span>
          <span className='navbar-Text'><a href="./../../view/about" className='remove-Name'>About</a></span>
          <span className='navbar-Text'><a href="./../../view/bolgs" className='remove-Name'>Bolgs</a></span>
        </div>
      </div>
      <img src={Image} className='main-Image'></img>

      <div className='hero-Container'>

        <div className='hero-Text'>
          <span className='hero-head'>Agrimart<br></br> Farm Fresh Products </span>
        </div>

        <div className='hero-Content'>
          <span className='hero-paragraph'>Fresh agri products bring the goodness of nature straight to your table, ensuring quality, nutrition, and flavor in every bite .</span><br></br>
          <span className='hero-Paragraph'>Our website connects you directly with local farmers, offering a range of farm-fresh organic products delivered straight to your door.We ensure quality, sustainability, and fair pricing.</span>



          <div className='section-Icons'>
            <img src={Earth} className='hero-Icons'></img>
            <img src={Cow} className='hero-Icons'></img>
            <img src={Vegetables} className='hero-Icons'></img>
            <img src={Farmer} className='hero-Icons'></img>
            <img src={Flower} className='hero-Icons'></img>
            <img src={Trak} className='hero-Icons'></img>
          </div>

          <div className='section-Texts'>
            <p className='section-Text'>Organic<br></br>
              Farming</p>
            <p className='section-Text'>Diffrent<br></br>
              Livestock</p>
            <p className='section-Text'>Fresh<br></br>
              Vegetables</p>
            <p className='section-Text'>Farm<br></br>
              Fresh</p>
            <p className='section-Text'>Beautiful<br></br>
              Flowers</p>
            <p className='section-Text'>Modern<br></br>
              Equipment</p>
          </div>
        </div>
      </div>
           <div className='choose-Section'>
            <img src={Choose} className='choose-Icons'></img>
            <div className=''>
              <span className='choose'>Why  Choose Us ? </span>
              <span className='choose-Text'>By building a culture of sustainability and wholesome living, we strive for a <br></br>
                healthier you and a healthier planet.</span><br></br>
              <a href=''className='decoration'><button type='button' className='choose-Btn'>Know more</button></a>
            </div>
            <img src={Choose} className='choose-Icons'></img>
           </div>        
    </div>
  )
}