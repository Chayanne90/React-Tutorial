import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Hello from './Hello';
import Message from './Message';
import MessageBox from './MeessageBox';

const App = () => {


    return (
        <div className="navebar">
         
            <Navbar />

            <Hello />

            <MessageBox>
                <Message 
                    title ="Hi"
                    messageContent = "this is a testes for props"
                    />
                             
            </MessageBox>    

            <MessageBox>
                <Message 
                    title ="Hi Mike"
                    messageContent = "What's up"
                    />
                             
            </MessageBox>    
       
            
        </div>

    );

};





ReactDOM.render(

    <App />,
    document.querySelector('#root')

    

);