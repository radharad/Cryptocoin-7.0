import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Business from './components/Business/Business';
import ScrollToTop from 'react-scroll-to-top';
import Login from './components/Login/Login';

function App() {
  return (
   <>
    <ScrollToTop smooth top="20" style={{backgroundColor:"#FD8C91",paddingLeft:"5px"}} color='white'/> 
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/navbar' element={<Navbar/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/business' element={<Business/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
