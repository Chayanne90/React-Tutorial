import React from 'react';
import ReactDom from 'react-dom';


function getButtonText() {
    return "CLick Me!";
}

/* => is the same as function () keyword */

const App = () => {

    const labelText = "Enter Name:";

    /*Example of and Object been call as string the obj: "text" need to be call like this:
      objExample.text */
    /* OBJECTS: can be call as a property on a attribute like in teh style! example,
       OBJECTS: can't be call as the String  */ 

    const objExample = {text: 'Click Me!'};
    const style = {backgroundColor: 'blue' ,color:'white'};  

    return (
        <div>
            <label className="label" htmlFor="name">
             {labelText}
            </label>
            <input id="name" type="text" />
            <button style={style}>{getButtonText()}</button>
            <p>{objExample.text}</p>
        </div>
    );
};


ReactDom.render(

    <App />,
    document.querySelector('#root')

);


