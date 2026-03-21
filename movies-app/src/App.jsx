import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import WatchList from "./components/WatchList";
import {Routes, Route} from "react-router-dom";



function App() {

  return (
    <>
    <NavBar />
    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/watchlist" element={<WatchList />}/>
    </Routes>
    </>

  );
}

export default App
