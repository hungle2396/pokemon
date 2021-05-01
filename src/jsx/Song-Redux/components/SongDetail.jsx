// SongDetail.jsx

import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    console.log(song);

    if (!song) {
        return <div>Select a song</div>
    };

    return (
        <div>
            <h3>Details for:</h3>
            <div>Title: {song.song.title}</div>
            <div>Duration: {song.song.duration}</div>
        </div>
    );
};

const mapStateToProp = (state) => {
    return {
        song: state.selectedSong
    };
}

export default connect(mapStateToProp)(SongDetail);