import {Routes, Route, Link} from 'react-router-dom';
import './Main.css';

function Main() {
    return (
        <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/booking" element={<BookingPage/>}></Route>
                <Route path="/calltoaction" element={<CallToAction/>}></Route>
                <Route path="/chicago" element={<Chicago/>}></Route>
                <Route path="/customers" element={<CustomersSay/>}></Route>
                <Route path="/specials" element={<Specials/>}></Route>
        </Routes>
    )
}