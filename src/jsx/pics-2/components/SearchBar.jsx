import React from "react";

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value);
    // };

    // onInputClick() {
    //     console.log("Input was clicked");
    // }

    state = { term: "" };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search: </label>
                        <input type="text" onChange={ e => this.setState({ term: e.target.value })}></input>
                    </div>
                </form>
            </div>
        )
    };
}

export default SearchBar;