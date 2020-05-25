import React from 'react';
import './PartnerCard.css';

//FIXME как динамически загружать изображения в компонент
const PartnerCard = ({data}) => {
	const imgurl = require("../../img/" + data.img);
	return (
		<article className="partner-card">
            	<img className="" src={imgurl} alt={data.name}></img>
		</article>
	)
}

export default PartnerCard;