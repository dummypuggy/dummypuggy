import React from 'react';
// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';


import './App.css';

import Page1 from './pages/page1/Page1';
import Box from '@mui/material/Box/Box';
import Header from './components/header/header';
import Planet from './pages/planet/Planet';
import MindMap from './pages/mindmap/mindmap';



const App = ():JSX.Element=> {
  return (
    <>
      <CssBaseline/>
      <Box className="App" sx={{
        position: 'relative',
      }}>
        
      {/* <header className="App-header">
        <nav>
          <Link to={'/'}>Page1</Link>
          <span> | </span>
          <Link to={'/counter'}>Counter</Link>
        </nav>
      </header> */}
      <Header/>
      <Box>
        <Routes>
          <Route path="/mindmap" element={<MindMap />} />
          <Route path="/planet" element={<Planet />} />
          <Route path="/" element={<Page1 />} />
        </Routes>
      </Box>
      
    </Box>
    </>
  );
}

export default App;
