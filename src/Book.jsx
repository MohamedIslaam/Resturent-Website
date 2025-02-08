import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList'
function Book({ date, setDate, time, setTime, name, setName, phone, setPhone, num, setNum, handleSubmit, bookData }) {
  let [select, setSelect] = useState(true);
  return (
    <div className='book-outer'>
      <ul>
        <li className={(select) ?
          ("sel") :
          ("not")
        } onClick={() => setSelect(true)}>Book</li>
        <li className={(!select) ?
          ("sel") :
          ("not")
        } onClick={() => setSelect(false)}>Book History</li>
      </ul>
      {(select) ?
        <BookForm
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          num={num}
          setNum={setNum}
          handleSubmit={handleSubmit}
        /> :
        <BookList
          bookData={bookData}
        />
      }
    </div>
  );
}

export default Book;
