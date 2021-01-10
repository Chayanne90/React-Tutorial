import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Hello from './Hello';

const App = () => {


    return (
        <div className="navebar">
            <Hello />
            <Navbar />
            
        </div>

    );

};





ReactDOM.render(

    <App />,
    document.querySelector('#root')

    

);