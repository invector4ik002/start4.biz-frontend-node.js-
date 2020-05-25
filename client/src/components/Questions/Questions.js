import React from "react";
import "./Questions.css";
import Quest from "./../Quest/Quest";
import QuestPopUp from "./../QuestPopUp/QuestPopUp";

export default function QuestionAnswer() {
    const [questions, setQuestions] = React.useState([
        {
            id: 1, title: 'Экономия', text: "Возможность зачесть НДС: например",
            open: true
        },
        {
            id: 2,
            title: 'Безопасность',
            text: "Возможность зачесть НДС: например, новый КамАЗ 6520 стоит 4 550 000. НДС",
            open: false
        },
        {
            id: 3,
            title: 'Удобство',
            text: "Возможность приобрести ТС на компанию, а использовать в личных целях;",
            open: false
        },
        {id: 4, title: 'Шапка', text: "Текст какой-то", open: false},
        {id: 5, title: 'Шапка', text: "Текст какой-то", open: false},
        {id: 6, title: 'Шапка', text: "Текст какой-то", open: false},
    ])

    let [popUpOpen, setPopUpOpen] = React.useState(false)

    function toggleQuest(id) {
        setQuestions(
            questions.map(quest => {
                if (quest.id === id) {
                    quest.open = !quest.open
                    console.log(quest.open)
                }
                return quest
            })
        )
    }

    function togglePopUp() {
        setPopUpOpen(
            popUpOpen = !popUpOpen
        )
    }

    return (
        <div className="container-fluid">
            <div className="questions">
                <div className="home-horizontal"> </div>
                <h3 className="questions__head">Вопрос - ответ</h3>
                <div className="questions__container">
                    {
                        questions.map(quest => {
                            return <Quest quest={quest} key={quest.id} changeVisible={toggleQuest}/>
                        })
                    }
                </div>
                <div className="home-button {/*questions__btn*/}" onClick={() => togglePopUp()}>
                    <span className="{/*questions__btn-text*/}">Задать вопрос</span>
                </div>
                <QuestPopUp popUpOpen={popUpOpen} togglePopUp={togglePopUp} toggleVisiblePop={togglePopUp}/>
            </div>
        </div>
    )
}