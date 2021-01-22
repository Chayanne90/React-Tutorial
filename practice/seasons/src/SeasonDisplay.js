import React from 'react';


const getSeason = (lat, month) => {    

    if(month > 2 && month <9) {
        lat > 0 ? 'summer' : 'winter';
    }

}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth);
    return (
        <div>Season Display : {props.lat}</div>
    );
};



export default SeasonDisplay;