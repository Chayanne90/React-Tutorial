import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';


// Simple Component
const App = () => {
    return (

        <div className="ui container comments">
            <CommentDetail 
             author="Milton" 
            timeAt="10:00PM" 
            comment="Nice job" 
            img='https://source.unsplash.com/random'
            />

            <CommentDetail
             author="Alex" 
             timeAt="7:00PM" 
             comment="Cool" 
            img='https://source.unsplash.com/random'
            />

            <CommentDetail 
            author="Chayanne" 
            timeAt="5:30PM" 
            comment="Awsome" 
            img='https://source.unsplash.com/random'
            />

        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);