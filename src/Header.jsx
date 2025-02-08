import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header>
        <Link to='/' className="link-style"><div className='img'><img src="logo.jpg" alt="" /></div></Link>
        <ul>
            <Link to ='/' className="link-style"><li>Home</li></Link>
            <Link to='/menu' className="link-style"><li>Menu</li></Link>
            <Link to='/book' className="link-style"><li>Book</li></Link>
        </ul>
    </header>
  )
}

export default Header