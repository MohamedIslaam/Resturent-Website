import { React, useState } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Menu from './Menu';
import Book from './Book';
function App() {
    let [date,setDate] = useState('');
    let [time,setTime] = useState('');
    let [name,setName] = useState('');
    let [phone,setPhone] = useState('');
    let [num,setNum] = useState('');
    let [bookData, setBookData] = useState([])
    function handleSubmit(e){
        e.preventDefault();
        alert("your table is booked you can check in book history tab");
        let newData = {
            name:name,
            phone:phone,
            num:num,
            date:date,
            time:time
        }
        setBookData([...bookData,newData]);
        setDate('')
        setTime('')
        setName('')
        setPhone('')
        setNum('')
    }

    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Body />} />
                <Route path='/menu'>
                    <Route index element={<Menu />} />
                    <Route path=':id' element={<Menu />} />
                </Route>
                <Route path='/book' element={<Book 
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
                bookData={bookData}
                />} />
            </Routes>
            <Footer />
        </div>
    );
}
export default App;
