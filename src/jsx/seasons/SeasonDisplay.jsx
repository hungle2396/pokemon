import "./SeasonDisplay.scss";
import React from "react";

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr, it is chilly",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month) => {

    console.log(`month is ${month}`);

    // Nothern Hemisphere
    if (month > 2 && month < 9) {
        console.log(`In the Nothern Hemisphere`);
        // if lat > 0 return summer, else return winter
        return lat > 0 ? "summer" : "winter";
    // Southern Hemisphere
    } else {
        console.log(`In the Southern Hemisphere`);
        return lat > 0 ? "winter" : "summer";
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());

    console.log(seasonConfig);

    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;