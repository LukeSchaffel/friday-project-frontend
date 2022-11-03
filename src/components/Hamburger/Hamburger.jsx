import './Hamburger.css'
import { useState } from 'react';

const Hamburger = () => {
  const [classes, setClasses] = useState('btn not-active')
  
  const changeButton = () => {
    if (classes === 'btn not-active'){
      setClasses('btn active')
    } else {
      setClasses('btn not-active')
    }

  }
 

  return (
    <div id="button" 
    className={classes} 
    onClick={()=> changeButton()}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Hamburger;