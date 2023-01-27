 import React from 'react';
 import { Routes, Route } from "react-router-dom";
 import FormData from './FormData';

 import './App.css';

function App() {
  return (
    <>
    <Routes>
    <Route path ='/' element ={<FormData/>}/>
    </Routes>
    </>
  );
}

export default App;
