import React from "react";
import "./Account.css";

export default function Account() {
  const [requests, setRequest] = React.useState([{
      id: 1,
      number: 123123512,
      prepayment: "40%",
      term: "12",
      open: false,
      tenders: [{
          id: 1,
          sender: "Сбербанк",
          logo: "./../../img/cbLogo.svg",
          linkPDF: "#",
          prepayment: "40%",
          term: "12",
          transport: 1000200,
          totalCost: 1400300
        },
        {
          id: 2,
          sender: "ВТБ",
          logo: "./../../img/vtbLogo.svg",
          linkPDF: "#",
          prepayment: "10%",
          term: "22",
          transport: 800200,
          totalCost: 1200300
        },
      ]
    },
    {
      id: 2,
      number: 12452512,
      prepayment: "20%",
      term: "22",
      open: false,
      tenders: [{
          id: 1,
          sender: "Сбербанк",
          logo: "./../../img/cbLogo.svg",
          linkPDF: "#",
          prepayment: "40%",
          term: "12",
          transport: 1000200,
          totalCost: 1400300
        },
        {
          id: 2,
          sender: "ВТБ",
          logo: "./../../img/vtbLogo.svg",
          linkPDF: "#",
          prepayment: "10%",
          term: "22",
          transport: 800200,
          totalCost: 1200300
        },
      ]
    }
  ])

  function toggleRequest(id) {
    setRequest(
      requests.map(request => {
        if (request.id === id) {
          request.open = !request.open
        }
        return request
      })
    )
  }

    return (
        <div className="account">
            <div className="account__main">
                <span className="account__router"><span className="account__routerLink">Главная страница</span><span className="account__routerLink">Вход</span></span>
                <h3 className="account__head">Заявки</h3>
                
                    {
                        requests.map(request => {
                            return  <div className="account__request">
                                    <div className="account__requestHead" onClick={() => toggleRequest(request.id)}>
                                        <span className="account__requestSpan account__requestnumber">Номер заявки: <b className="account__requestSpanBold">{request.number}</b></span>
                                        <span className="account__requestSpan account__requestPrepayment">Аванс: <b className="account__requestSpanBold">{request.prepayment}</b></span>
                                        <span className="account__requestSpan account__requestTerm">Срок: <b className="account__requestSpanBold">{request.term + " мес"}</b></span>
                                        <span className="account__requestSpan account__requestCount">Кол-во предложений: <b className="account__requestSpanBold">{request.tenders.length}</b></span>
                                        <img alt="Подробнее" src={!request.open ? "./../../img/chevron-right.svg" : "./../../img/chevron-down.svg"} className="account__requestArrow"></img>
                                    </div>
                                    {request.open &&
                                        request.tenders.map(tender => {
                                            return <div className="account__requestReply">
                                                        <div className="account__requestReplyContent">
                                                            <img src={tender.logo} alt={tender.sender} className="account__requestReplyImg"></img>
                                                            <span className="account__requestSpan account__requestReplyPrepayment">Аванс: <b className="account__requestSpanBold">{tender.prepayment}</b></span>
                                                            <span className="account__requestSpan account__requestReplyTerm">Срок: <b className="account__requestSpanBold">{tender.term + " мес"}</b></span>
                                                            <span className="account__requestSpan account__requestReplyTransport">Ст-ть транспорта: <b className="account__requestSpanBold account__requestSpanBold_leftMarg24">{tender.transport}</b></span>
                                                            <span className="account__requestSpan account__requestReplyTotalCost">Итоговая ст-ть лизинга:<b className="account__requestSpanBold account__requestSpanBold_leftMarg18">{tender.totalCost}</b></span>
                                                        </div>
                                                        <div className="account__requestPDF">
                                                            <a href={tender.linkPDF} alt={tender.sender + " предложение"} className="account__requestPDFLink">
                                                                <div className="account__requestReplyPDF"></div>
                                                            </a>
                                                            <div className="account__requestReplyPDFBtn">Чат с компанией</div>
                                                        </div>
                                                        
                                                    </div>
                                        })
                                    }
                                    </div>
                        })
                    }
            </div>
            <div className="account__nav">
                <h4 className="account__navHead">Навигация</h4>
                <span className="account__navLink">Контактная информация</span>
                <span className="account__navLink">Информация об организации</span>
                <span className="account__navLink">Заявки</span>
                <span className="account__navLink">Выход</span>
            </div>
        </div>
    )
}