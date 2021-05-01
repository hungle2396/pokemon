import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {
        question: "What is React?",
        answer: "React is a javascript library that helps create resuable component, it is helpful when your project is getting bigger and need to reuse a lot of codes"
    },
    {
        question: "Why use React?",
        answer: "React is a favorite JS library among engineers"
    },
    {
        question: "How do you use React?",
        answer: "You use React by creating Components"
    }
];

const App = () => {
    return (
        <div className="app__container">
            <Search />
        </div>
    );
};

export default App;