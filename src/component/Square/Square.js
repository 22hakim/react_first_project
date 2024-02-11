import React from 'react'
import { useState } from 'react';
import style from "./Square.module.css"

const Square = () => {
  
  let [bcg, setBcg ] = useState('bcg-blue');  
  
  function handleClick() {
    if (bcg == 'bcg-blue')
    {
        setBcg('bcg-green')
    }
    else
    {
			setBcg('bcg-blue')
    }
  }  

	let classList = style['square-style'] + ' ' + style[bcg];
	
  return (
    <div className={classList} onClick={handleClick} ></div>
  )
}

export default Square;

