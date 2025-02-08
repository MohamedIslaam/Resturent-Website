import React from 'react';

function MenuList({foodList}){
    return(
    <div className='disfoo'>
        {foodList.map((itm)=>(
            <div className='boxs'>
                <div className='fimg'><img src={itm.image} alt={itm.title} /></div>
                <div className='inbox'>
                    <p className="price">{itm.price}</p>
                    <p className="ftitle">{itm.title}</p>
                    <p className="de">Made With {itm.madeWith}</p>
                </div>
            </div>
        ))}
    </div>
    )
}

export default MenuList;