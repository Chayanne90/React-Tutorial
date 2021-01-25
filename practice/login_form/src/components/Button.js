import React from 'react';


const Button = (props) => {

  return (
    <button type="button" className={props.color}>{props.text}</button>
  );
}



export default Button;