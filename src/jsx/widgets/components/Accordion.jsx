import React, {useState} from "react";
import "../sass/Accordion.scss";

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);
    
    const onClickAccordion = (index) => {
        console.log(`current index is ${index}`);
        setActiveIndex(index);   
    };

    const renderedItems = items.map((item, index) => {
        let active = index === activeIndex ? "active" : "";

        return (
            <div key={item.title} onClick={() => onClickAccordion(index)}>
                <div className={`title ${active}`}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>

                <div className={`content accordion__content ${active}`}>
                    {item.content}
                </div>
            </div>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
};

export default Accordion;