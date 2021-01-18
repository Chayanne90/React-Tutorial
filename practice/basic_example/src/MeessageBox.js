import React from 'react';

const MessageBox = (porps) => {

    return (

        <div class="ui message">
            {porps.children}
        </div>
    );
}




export default MessageBox;