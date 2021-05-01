import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Testing from "./components/Testing";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import "../../sass/base_base.scss";
import "./sass/App.scss";

const items = [
    {
        title: "What is React?",
        content: "React is a javascript front end framework!"
    },
    {
        title: "Why use React?",
        content: "The reason to use React is because of the component reusability, so that when your project gets bigger, it is useful to be able to reuse and maintain old code."
    },
    {
        title: "How do you use React?",
        content: "We use react by creating components."
    }
];

const options = [
    {
        label: "Red color",
        value: "red"
    },
    {
        label: "Green color",
        value: "green"
    },
    {
        label: "Blue color",
        value: "blue"
    }
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropDown] = useState(true);

    return (
        <div className="app__container">
            <Translate />
        </div>
    );
};

export default App;