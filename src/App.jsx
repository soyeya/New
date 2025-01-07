import React, {useEffect}from 'react';
import './App.scss';
import Main from './components/Main.jsx';
import Ootd from './components/Ootd.jsx';
import Work from './components/Work.jsx';
import Project from './components/Project.jsx';

const App = () => {

  useEffect(() => {

    const cursor = document.getElementById("cursor-custom"),
    radius = cursor.offsetHeight / 2;
  
    window.addEventListener("load", () => {
      if(window.innerWidth > 1024){
        document.addEventListener("mousemove", (e) => {
          let top = e.clientY - radius,
          left = e.clientX - radius;
          cursor.style = `top: ${top}px; left: ${left}px`;
        });
      }
    })
    window.addEventListener("resize" , () => {
       if(window.innerWidth > 1024){
        document.addEventListener("mousemove", (e) => {
          let top = e.clientY - radius,
          left = e.clientX - radius;
          cursor.style = `top: ${top}px; left: ${left}px`;
        });
      }
    })
  
  },[])

  return (
    <div id="app">
      <Main/>
      <Ootd/>
      <Work/>
      <Project/>
    </div>
  );
}

export default App;
