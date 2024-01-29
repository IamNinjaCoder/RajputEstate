import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About.jsx" element={<About/>}/>
          <Route path='/Profile.jsx' element={<Profile/>}/>
          <Route path='/SignIn.jsx' element={<SignIn/>}/>
          <Route path='/SignUp.jsx' element={<SignUp/>}/>
        </Routes>
    
    </BrowserRouter>

  )
}
