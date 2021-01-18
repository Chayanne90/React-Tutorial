import React from 'react';


const Navbar = () => {
    return (
        
        <div class="ui breadcrumb">
            <div class="section">
               <a href="/">Home</a> 
            </div>
            <div class="divider"> / </div>
            <div class="section">Search</div>
            <div class="divider"> / </div>
            <div class="section">About Me</div>
            <div class="divider"> / </div>
            <div class="section">Catalog</div>
        </div>

    );
};



export default Navbar;