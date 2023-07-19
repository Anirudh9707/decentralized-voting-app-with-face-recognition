/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route,Routes,useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import MetaLogin from './pages/MetaLogin';
import FaceAuth from './pages/FaceAuth';

function App() {
  

  return (
    <Routes>
   <Route path="/" element={<FaceAuth/>}/>
   <Route path="/newpage" element={<MetaLogin/>}/>
   </Routes>
    
    
  )
}

export default App