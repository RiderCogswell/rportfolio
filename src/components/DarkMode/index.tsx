import React, { useState } from 'react';

export default function Button() {

  const [isClicked, setIsClicked] = useState(false);

  const toggle = () => {

    let element = document.body;

    element.classList.toggle('dark');

    setIsClicked(isClicked => !isClicked) // sets to opposite
  }

  return (
    <button className='dark-mode-btn' onClick={toggle}>{isClicked ? "☾" : "☼"}</button>
  )
}