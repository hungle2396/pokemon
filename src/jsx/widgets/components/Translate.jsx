import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
import "../sass/Translate.scss";

const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    }
];

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return (
        <div className="translate__container">
            <div className="ui form">
            	<div className="field">
                    <label className="label">Enter Text</label>
                	<input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>

            <Dropdown label="Select a language" selected={language} options={options} onSelectedChange={setLanguage} />

            <h2>Output</h2>
            
            <Convert language={language} text={text} />
        </div>
    )
};

export default Translate;