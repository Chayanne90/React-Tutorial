import React from 'react';


/* Get season base on what month you are currently are */
const getSeason = (lat, month) => {    

    if(month > 2 && month <9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

/* season dispaly message  */

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth);

    const text = season === 'Winter' ? 'Burr, it is Chilly' : 'Lets hit the Beach';

    const icon = season === 'Winter' ? 'snowflake' : 'sun';

    return (
        <div>
            <i className={`${icon} icon`}/>
            <h1>{text}</h1>    
            <i className={`${icon} icon`}/>
        </div>
    );
};



export default SeasonDisplay;