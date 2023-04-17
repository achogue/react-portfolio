import React, { lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";


import Home from './pages/home';
import Projects from './pages/projects';


function App() {
  return (
    <BrowserRouter>
      
        <Layout>
         
            <Routes>
              <Route path="/projects" element={<Projects/>} />
              <Route exact path="/" element={<Home />} />
            </Routes>
          
        </Layout>
      
    
    </BrowserRouter>
  );
}

export default App;
