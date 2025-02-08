import React from 'react'

function BookForm({ date, setDate, time, setTime, name, setName, phone, setPhone, num, setNum, handleSubmit}) {
    return (
        <div className='book-container'>
            <h1>Book A Table</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <div className='row'>
                        <div className='input-group'>
                            <label htmlFor="date">Date</label>
                            <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e)=>setDate(e.target.value)}/>
                        </div>
                        <div className='input-group'>
                            <label htmlFor="time">Time</label>
                            <input type="time" id="time" value={time} onChange={(e)=>setTime(e.target.value)}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-group'>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className='input-group'>
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" placeholder='+91 1234567890' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="person">Total Persons</label>
                        <input type="number" id="person" placeholder='Enter number of persons' value={num} onChange={(e)=>setNum(e.target.value)}/>
                    </div>
                </div>
                <button type='submit'>Book Now</button>
            </form>
        </div>
    )
}

export default BookForm