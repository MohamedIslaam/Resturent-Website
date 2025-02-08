import React from 'react';
import ShowMenu from './ShowMenu';
import Services from './Services';
import {Link} from 'react-router-dom';

function Body() {
  return (
    <hero>
      <div className='body'>
        <div className='bodycon'>
          <h1>Best Food For your Taste</h1>
          <p>Discover delectable cuisine and unforgettable moments in our welcoming,
            culinary haven.</p>
          <div>
            <Link to='/book' className="link-style"><button className='book'>Book A Table</button></Link>
            <Link to='/menu' className="link-style"><button className='menu'>Explore Menu</button></Link>
          </div>
        </div>
      </div>
      <ShowMenu />
      <Services />
    </hero>
  )
}

export default Body