import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';


// Simple Component
const App = () => {
    return (

        <div className="ui container comments">
            <CommentDetail />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);