import React from "react";
import { selectSong } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const SongList = (props) => {
    const renderList = props.songs.map((song) => {
        return (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button className="ui button primary" onClick={() => props.selectSong(song)}>
                        Select
                    </button>
                </div>

                <div className="content">{song.title}</div>
            </div>
        )
    });

    return (
        <div className="ui divided list">
            {renderList}
        </div>
    )
};

const mapStateToProps = (state) => {

    return {
        songs: state.songList
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectSong}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);