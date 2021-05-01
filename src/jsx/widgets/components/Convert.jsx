import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState("");
    const [debouncedText, setDebouncedText] = useState(text);
   
    useEffect(() => {
        const timerId = setTimeout(() => {
            debouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {
        const translation = async () => {
            const result = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: text,
                    target: language,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            });

            setTranslated(result.data.data.translations[0].translatedText);
        }

        translation();
    }, [language, text]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
};

export default Convert;