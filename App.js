import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Greeting from './Greeting';

function App() {
  const [text,setText] = useState('')
  const changeText = () => {
      setText(text)
  }
  return <div className= 'header-div'>
  <br></br>
  
  <br></br>
   <Login 
   />
  </div>
}

export default App;
