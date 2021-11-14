import React, { Suspense, lazy } from 'react';
import './App.css';

import { BrowserRouter , Routes,Route} from "react-router-dom";

import Home from './components/Home'

import Product from './components/Product';
import Course from './components/Course';

import EnquiryForm from './components/EnquiryForm';
import UserEnquiry from './components/UserEnquiry';

function App() {
  return (
    <div className="App">
    
      
      <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home/>}/>
     
        <Route path="/product" element={<Product/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/form" element={<EnquiryForm/>}/>
        <Route path="/enquiry" element={<UserEnquiry/>}/>
       
      </Routes>
     
      
      </BrowserRouter>
     
    
      

     
      
    
     
     
    

     
      
    
    </div>
  );
}

export default App;
