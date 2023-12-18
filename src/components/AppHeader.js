import React from 'react';
import './AppHeader.css';
import { Download,Hand } from 'lucide-react';
import { useState } from 'react';

const AppHeader = () => {
  const [onhover, setHover] = useState(false);
  const [hover, HoverOn] = useState(false)

  const handlehover = () =>{
    setHover(true)
  }
  const disablehover = () => {
    setHover(false)
  }
  const handlehover_2 = () =>{
    HoverOn(true)
  }
  const disablehover_2 = () => {
    HoverOn(false)
  }
  const styles_download = {
    backgroundColor: onhover ? "rgb(0, 183, 122)" : "black",
    color:onhover ? "black" : "white"
  }
  const styles_hand = {
    backgroundColor: hover ? "#EDD83D" : "black",
    color:hover ? "black" : "white"
  }
  return (
    <div className='header'>
      <ul className='list-left'>
        <li>kalyan labhishetty</li>
      </ul>
      <ul className='list-right'>
        <a href="./image/Saikalyan_resume.pdf" download="Resume" target='_blank' rel='noreferrer'>
        <button onMouseEnter={handlehover} onMouseLeave={disablehover} style={styles_download}>Resume <Download size={17} style={styles_download} /></button>
        </a>
        <a href='https://mail.google.com/mail/u/0/?fs=1&to=your.labhishettysaikalyan@gmail.com&tf=cm' target='_blank' rel="noopener noreferrer">
        <button  onMouseEnter={handlehover_2} onMouseLeave={disablehover_2} style={styles_hand}>Contact <Hand size={17} style={styles_hand} /></button>
        </a>
       
      </ul>
    </div>
  );
}

export default AppHeader;
