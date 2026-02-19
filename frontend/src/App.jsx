import { useState } from 'react' ;
import axios from "axios" ;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css' ;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App ;
