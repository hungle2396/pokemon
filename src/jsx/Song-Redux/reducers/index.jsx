import { combineReducers } from "redux";

// reducers/index.jsx

const songListReducer = () => {
    return [
        {
            title: "Kiss Me More",
            duration: "2:36"
        },
        {
            title: "Astronaut in the Ocean",
            duration: "3:03"
        },
        {
            title: "Sour Candy",
            duration: "2:14"
        },
        {
            title: "Prisoner",
            duration: "4:02"
        }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SELECTED_SONG") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songList: songListReducer,
    selectedSong: selectedSongReducer
});