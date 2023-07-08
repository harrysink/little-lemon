import { useState, useEffect, React } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Reservations from './components';
import { headerInfo, reservationInfo} from './reusables';
import {Routes, Route, useLocation  } from "react-router-dom";
import DataContext from './DataContext';
import ConfirmedBooking from './components/reservation/ConfirmedBooking';
import './App.css';

function App() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(()=> {
    setPath(location.pathname);
  }, [location.pathname]);

  let data = {};
  if(path === '/' || path === '/Little-Lemon') {
    data = headerInfo;
  } else if (path === '/Reservations') {
    data = reservationInfo;
  }

  return (
    <>    
      <Navbar />
      <DataContext.Provider value={data}>
        <Routes>
          <Route path='/Little-Lemon' element ={ 
            <>
              <Header />
              <Main />
            </>
          }/>                  
          <Route path='/' element ={ 
            <>
              <Header />
              <Main />
            </>
          }/>
          <Route path='/Reservations' element={
            <>
              <Header />
              <Reservations />      
            </>
          }/>
          <Route path='/OrderOnline' element={
            <>
              <Header />
              <OrderOnline />  
            </>
          }/>                  
          {/*confirmation of booking path*/}
          <Route path='/ConfirmedBooking' element={<ConfirmedBooking/>}/>
        </Routes>
      </DataContext.Provider>
      <Footer />
    </>
  );
}

export default App;
