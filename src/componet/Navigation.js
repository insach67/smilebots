import React from 'react'
import './css/Navigation.css'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <div>
        <div className='nav__container'>
            <div className="rigth">
      <ul>
        <li><Link to= "/home" style={{textDecoration: 'none', color : 'black'}} >Sachin</Link> </li>
        <li><Link to= "/home" style={{textDecoration: 'none', color : 'black'}} >Home</Link> </li>
        <li><Link to= "/Shop" style={{textDecoration: 'none', color : 'black'}} >Shop</Link> </li>
        <li><Link to= "/favourite" style={{textDecoration: 'none', color : 'black'}} >Favorite</Link> </li>
        <li><Link to= "/order" style={{textDecoration: 'none', color : 'black'}} >Order</Link> </li>
        <li><Link to= "/contact" style={{textDecoration: 'none', color : 'black'}} >Contact</Link> </li>              
       </ul>
       </div>
       <div className="left">
        <ul>
            <li>
            <li><Link to= "/profile" style={{textDecoration: 'none', color : 'black'}} >Profile</Link> </li>
            </li>
        </ul>
       </div>
      
    </div>
    </div>
  )
}
export  default Navigation;