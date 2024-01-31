import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import PrivateRoute from './components/privateRoute';


export default function App() {
  return (
    <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About.jsx" element={<About/>}/>
          <Route path='/SignIn.jsx' element={<SignIn/>}/>
          <Route path='/SignUp.jsx' element={<SignUp/>}/>
          
        <Route element={<PrivateRoute />}>
          <Route path='/profile.jsx' element={<Profile />} />
          </Route>


        </Routes>
    
    </BrowserRouter>

  )
}
