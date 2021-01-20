import React from 'react';
import ReactDOM from 'react-dom';


/*
const App = () => {


    return (
        
        <div>Latitude:</div>
    );
};*/


/* CLASS component */
class App extends React.Component {

    /* This constructor method is the first one to be call
     every time an instance of the App comment is created 
    */
    constructor(props) {
        super(props);

        // This is the only time you do the direct assignment
        // to this.state, becasue is inside the constructor method
        this.state = { lat: null, long: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                /* THIS IS HOW TO setState */
                this.setState({ lat: position.coords.latitude, long: position.coords.longitude });

                // DOT NOT DO THIS 
                /* this.state.lat = position.coords.latitude */
            },
            (err) => console.log(err)
        );
    }

    // render() is mandatory when crating a class component
    render() {
        
        return(
            <div>Latitude: {this.state.lat} Llongitude: {this.state.long}</div>
        );
    }
}



ReactDOM.render(


    <App />,
    document.querySelector('#root')

    
);

