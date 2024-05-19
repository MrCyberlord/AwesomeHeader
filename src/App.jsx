import React, { useEffect } from 'react';
import LeftSide from './components/LeftSide.jsx';
import RightSide from './components/RightSide.jsx';
import MetaLink from './components/MetaLink.jsx';
import './App.css';

const App = () => {
  
  useEffect(() => {
    const left = document.getElementById("left-side");

    const handleMove = (e) => {
      left.style.width = `${e.clientX / window.innerWidth * 100}%`;
    };

    document.onmousemove = (e) => handleMove(e);
    document.ontouchmove = (e) => handleMove(e.touches[0]);

    return () => {
      document.onmousemove = null;
      document.ontouchmove = null;
    };
  }, []);

  return (
    <div className="App">
      <LeftSide />
      <RightSide />
      <MetaLink 
        id="contact" 
        href="mailto:amanjain2691@gmail.com" 
        text="contact" 
      />
    </div>
  );
}

export default App;
