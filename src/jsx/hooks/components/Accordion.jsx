import React, { useState } from "react";

const Accordion = ({ questions }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderQuestions = questions.map((question, index) => {
        let active = "";

        if (activeIndex === index) {
            active = "active"
        }

        return (
            <div className="accordion__item" key={question.title}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {question.question}
                </div>
                <div className={`content ${active}`}>
                    <p>{question.answer}</p>
                </div>
            </div>
            
        );
    });

    return (
        
        <div className="accordion__container ui styled accordion">
            {renderQuestions}
        </div>
    );
};

export default Accordion;