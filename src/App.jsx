/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css'
import Sidebar from './components/sidebar';
import Player from './components/Player';
import Navbar  from './components/Navbar';

function App() {
    
    return(
      <div className='h-screen bg-black ' >
        <div className='h-[90%] flex'>
          <Sidebar/>
        <Navbar/>
        </div>
          <Player/>
      </div>
    )
}


export default App
