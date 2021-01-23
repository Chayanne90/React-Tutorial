import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


/* function component
const App = () => {


    return (
        
        <div>Latitude:</div>
    );
};*/


/* CLASS component */
class App extends React.Component {

    /* This constructor method is the first one to be call
     every time an instance of the App comment is created 
    
    constructor(props) {
        super(props);

        // This is the only time you do the direct assignment
        // to this.state, becasue is inside the constructor method
        this.state = { lat: null, long: null, errorMsg: ''};

    }*/

    /* Is not mandatory to inizialize a state! inside the 
       constructor you also can do it here! in the body of
       the class compoente*/
    state = { lat: null, long: null, errorMsg: ''};


    /* This  method is part of the components lifecycle.
     Is very good to load data! */
    componentDidMount() {
        
        window.navigator.geolocation.getCurrentPosition(

            (position) => { this.setState({ lat: position.coords.latitude, long: position.coords.longitude })},
            (err) => { this.setState({errorMsg: err.message}) }
        );
    }

    // render() is mandatory when crating a class component
    render() {
        /* Conditionally Rendering */
        if(this.state.errorMsg && !this.state.lat && !this.state.long ) { 
            return <div>Error: {this.state.errorMsg}</div>
        } 

        if(!this.state.errorMsg && this.state.lat && this.state.long) {
            return (

                /*<div>
                    Latitude: {this.state.lat}
                    <br />
                    Longitude: {this.state.long}
                </div>*/

                <div>
                    <SeasonDisplay lat = {this.state.lat}/>
                </div>
            );
        }

        return <Spinner msg="Please accept location request"/>

    }
}



ReactDOM.render(


    <App />,
    document.querySelector('#root')

    
);

