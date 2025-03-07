
import Navbar from "../../components/navbar/Navbar";
import  Cards from "./../../components/homeCards/Cards";
import './../../components/homeCards/Card.css';
import pear from  './../../components/homeCards/pear.png';
import grapes from './../../components/homeCards/grape.png';
import peach from './../../components/homeCards/peach.png';
import apple from './../../components/homeCards/apple.png';



export default function Homees(){
    return (
        <div>
          <Navbar/>
         <div className="Cards">
          <Cards name = "Pear" image ={pear} title= "Pears are juicy and sweet, a healthy and delicious snack that you can enjoy anytime."/>
          <Cards name = "Grapes" image ={grapes} title= "Grapes are small, round fruits that come in bunches. They are perfect for snacking or making wine."/>
          <Cards name = "Peach" image ={peach} title= "Peaches are soft and sweet with a fuzzy skin, commonly used in desserts, jams, and summer treats."/>
          <Cards name = "Apple" image ={apple} title= "Apples are crisp and refreshing, available in many varieties. They are used in a wide range of recipes."/>
          </div> 
        </div>
    )
}