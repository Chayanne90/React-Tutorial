import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';



// Simple Component
const App = () => {
    return (

        <div className="ui container comments">

            <ApprovalCard>
                <CommentDetail 
                author="Milton" 
                timeAt="10:00PM" 
                comment="Nice job" 
                img='https://source.unsplash.com/random'
                />
            </ApprovalCard>

            
            <ApprovalCard>
                <CommentDetail
                author="Alex" 
                timeAt="7:00PM" 
                comment="La Vida Es Una" 
                img='https://source.unsplash.com/random'
                />
            </ApprovalCard>

       
            <ApprovalCard>
                <CommentDetail 
                author="Chayanne" 
                timeAt="5:30PM" 
                comment="Awsome" 
                img='https://source.unsplash.com/random'
                />
            </ApprovalCard>

    
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);