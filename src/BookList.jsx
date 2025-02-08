import React from 'react';

function BookList({ bookData }) {
  return (
    <div className="showbook">
      {bookData.map((e, index) => (
        <div className="showbox" key={index}>
          <div className="fir">
            <h2>{e.name}</h2>
            <div className="r1">
              <p><strong>Date:</strong> {e.date}</p>
              <p><strong>Time:</strong> {e.time}</p>
            </div>
            <div className="r2">
              <p><strong>Persons:</strong> {e.num}</p>
              <p><strong>Phone:</strong> {e.phone}</p>
            </div>
          </div>
          <p className="sec">Confirmed</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
