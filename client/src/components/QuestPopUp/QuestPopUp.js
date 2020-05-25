import React from "react"
import "./QuestPopUp.css"

export default function Question({popUpOpen, togglePopUp}) {
const classText = ["popUp"]
let [inputVal, setInputVal] = React.useState('')
let [textVal, setTextVal] = React.useState('')


let [validPop, setValidPop] = React.useState(false)
if(popUpOpen) {
    classText.push("popUp_active")
}
    /**
     * Валидация по строке inputa
     * @param {string} text текст валидации 
     */
    function validateQuestion () {
        setValidPop(
            validPop = !validPop
        )
    }

    function clear () {
        setInputVal('')
        setTextVal('')
    }

    /**
     * Отправка сообщения на сервер
     */
    function sendQuestion () {
        validateQuestion()
        if (validPop) {
            console.log("Почта отправителя: " + inputVal + " Текст: " + textVal)

            const body = {
                quest_email: inputVal,
                question: textVal,
            }
            
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(body),
            }
            
            fetch('/api/faq/create-faq', options)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    console.log(response);
                } else {
                    alert ("Произошла ошибка при отправке данных!");
                }
            })
            .catch(error => console.log("Error ", error))
        }
    }

    return (
        <div className={classText.join(" ")}>
            <div className={!validPop ? "popUp__card" : "popUp__card popUp__card_noPad"}>
                <div className={!validPop ? "popUp__question" : "popUp__card_none"}>
                    <h4 className="popUp__head">Задать вопрос</h4>
                    <span className="popUp__label" name="email">
                        Эл.почта
                    </span>
                    <div className="popUp__input-wrapper">
                        <input className="popUp__input" type="email" name="email" placeholder="alexandrivanov@mail.ru" value={inputVal} onChange={event => setInputVal(event.target.value)}/>
                    </div>
                    <span name="text" className="popUp__label">
                        Вопрос
                    </span>
                    <div className="popUp__input-wrapper">
                        <textarea className="popUp__text" name="text" placeholder="Подскажите, пожалуйста..." value={textVal} onChange={event => setTextVal(event.target.value)}></textarea>
                    </div>
                    <div className="popUp__btn" onClick={() => sendQuestion()}>Отправить</div>
                </div>
                
                <div className={validPop ? "popUp__success" : "popUp__card_none"}>
                    <h4 className="popUp__head">Ваш вопрос отправлен</h4>
                </div>
                
                <div className="popUp__close" onClick={() => [togglePopUp(), setValidPop(), clear()]}></div>
            </div>
        </div>
    )
}