import React, { lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { NotFound } from "./pages/notFound";

import Home from './pages/home';
import Projects from './pages/projects';
//const Projects = lazy(() => import(/* webpackChunkName: "ProjectRoute" */ './pages/projects'));

function App() {
  return (
    <BrowserRouter>
      
        <Layout>
         
            <Routes>
              <Route path="/projects" element={<Projects/>} />
              <Route exact path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          
        </Layout>
      
    
    </BrowserRouter>
  );
}

export default App;
