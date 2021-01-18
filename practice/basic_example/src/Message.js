import React from 'react';


const Message =(props) => {

    return (

        <div>
            <div class="header"> {props.title} </div>
            <p>{props.messageContent}</p>
        </div>
    );
}



export default Message;