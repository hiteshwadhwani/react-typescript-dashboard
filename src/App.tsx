import React from 'react';
import './App.css';
import Home from "./components/Home"
import {Toaster} from 'react-hot-toast'


function App() {
  return (
    <div className="App">
      <Toaster />
      <Home />
    </div>
  );
}

export default App;
