import './seasonDisplay.css';
import React from 'react';


/* config objects */
const seasonConfig = {
    Summer: {
        text: "Let's Hit The Beach",
        iconName: 'Sun'
    },
    Winter: {
        text: "Burr, it is Chilly",
        iconName: 'snowflake'
    }
}

/* helper function */
/* Get season base on what month you are currently are */
const getSeason = (lat, month) => {    

    if(month > 2 && month <9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

/* season display message  */
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth);

    const {text, iconName} = seasonConfig[season];

    return (
        <div className= {`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>    
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
};



export default SeasonDisplay;