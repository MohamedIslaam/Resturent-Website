import React from 'react'
import {Link} from 'react-router-dom';
import { BsCupHotFill } from "react-icons/bs";
import { BiSolidBowlRice } from "react-icons/bi";
import { RiDrinks2Fill } from "react-icons/ri";
import { GiCakeSlice } from "react-icons/gi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
function ShowMenu() {
  let smallMenu=[
    {
      icon: <BsCupHotFill className='ic' />,
      title: "Breakfast",
      para: "Enjoy a wholesome and energizing breakfast to start your day right.",
      url:"breakfast"
    },
    {
      icon: <BiSolidBowlRice className='ic' />,
      title: "Main Dishes",
      para: "Delight in a variety of flavorful and filling main course meals.",
      url:"mainDishes"
    },
    {
      icon: <RiDrinks2Fill className='ic' />,
      title: "Drinks",
      para: "Refresh yourself with a selection of cold and hot beverages.",
      url:"drinks"
    },
    {
      icon: <GiCakeSlice className='ic' />,
      title: "Desserts",
      para: "Treat yourself to delicious and mouthwatering sweet delights.",
      url:"desserts"
    }
  ]
  
  return (
      <div className='smallmenu'>
        <h1>Our Menu</h1>
        <div className='show'>{
          smallMenu.map((itm)=>(
            <div className='box'>
              <div className="icon">{itm.icon}</div>
              <h3>{itm.title}</h3>
              <p>{itm.para}</p>
              <Link to={`/menu/${itm.url}`} className="link-style"><p className='p'>Explore <FaRegArrowAltCircleRight className='cl'/></p></Link>
            </div>
          ))}
        </div>
        <Link to='/menu' className='link-style'><button className='mbtn'>Menu <FaRegArrowAltCircleRight className='cli' /> </button></Link>
      </div>
  )
}

export default ShowMenu;