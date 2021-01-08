import React from 'react';
import ReactDOM from 'react-dom';

// simple component
const App = () => {
    return <div>Hi Chayanne!</div>
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);