import React from "react";
import "./Quest.css";

export default function Question({quest, changeVisible}) {
const classText = ["quest__text"];

if(!quest.open) {
    classText.push("quest__text_none");
}
    /**
     * Валидация по сроке с добавлением переноса после ";"
     * @param {string} text текст валидации 
     */
    function validateText(text) {
        return text
    }

    return (
        <div className="quest">
            <div className="quest__content">
                <h4 className="quest__head" onClick={() => changeVisible(quest.id)}>{quest.title}<div className="quest__more">{quest.open ? "-" : "+"}</div></h4>
                <div className={classText.join(" ")}>
                {validateText(quest.text)}
                </div>
            </div>
        </div>
    )
}