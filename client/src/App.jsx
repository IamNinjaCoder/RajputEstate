import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import PrivateRoute from './components/privateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Search from './pages/Search';
import Listing from './pages/Listing';
import Contact from './pages/Contact';




export default function App() {
  return (
    <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About.jsx" element={<About/>}/>
          <Route path='/SignIn.jsx' element={<SignIn/>}/>
          <Route path='/SignUp.jsx' element={<SignUp/>}/>
          <Route path='/listing/:listingId' element={<Listing/>}/>
          <Route path='/search' element={<Search/>} />
          <Route path='/contact' element={<Contact/>} />

        <Route element={<PrivateRoute />}>
          <Route path='/profile.jsx' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route path='/update-listing/:listingId' element={<UpdateListing />} />
          
          </Route>
        </Routes>
    
    </BrowserRouter>

  )
}
