import React from 'react';
import './App.css';
import Nav from './navbar/navbar';
import logo from "/logo.svg";

function App() {
  let items = ["Home","Product", "Service"];
  return (
    <div className="App">
      <Nav 
      brandName="My Brand" 
      imageSrcPath="" 
      navItems={items}/>
    </div>
  );
}

export default App;
