import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
	summer: {
		season: "gadi kadhne bhura diu javu!",
		iconName: "sun",
	},
	winter: {
		season: "Ghare ryo taidh na mari jaho!",
		iconName: "snowflake",
	},
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

const SeasonDisplay = (props) => {
	const setSeason = getSeason(props.lat, new Date().getMonth());
	const { season, iconName } = seasonConfig[setSeason];
	return (
		<div className={`season-display ${setSeason}`}>
			<i className={`icon-left massive ${iconName} icon `} />
			<h1>{season}</h1>
			<i className={`icon-right massive ${iconName} icon `} />
		</div>
	);
};

export default SeasonDisplay;
