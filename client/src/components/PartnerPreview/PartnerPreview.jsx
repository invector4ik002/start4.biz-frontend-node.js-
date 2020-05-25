import React, {useState} from 'react';
import './PartnerPreview.css';

//FIXME как динамически загружать изображения в компонент
const PartnerPreview = ({data}) => {
	//FIXME при наведении блок с описанием. Проблема: блок с positin absolute обрезается родителем-слайдером
	//у которого overflow: hidden.
	const [isShowDescription, showDescription] = useState(false);
	const imgurl = require("../../img/" + data.img);
	return (
		<div className="partner" onMouseEnter={() => showDescription(true)}
			onMouseLeave={() => showDescription(false)}>
            	<img className="" src={imgurl} alt={data.name}></img>
			<div className="partner__proc-value">{`${data.procValue} %`}</div>
			{/* {isShowDescription && <div className="partner__discription">
				<div>{data.description}</div>
			</div>} */}
		</div>
	)
}

export default PartnerPreview;
