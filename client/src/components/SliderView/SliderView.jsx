import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderView.css';
import PatrnerPreview from '../PartnerPreview/PartnerPreview';

//FIXME настроить слайдер, внутренние блоки с absolute обрезаются слайдером
const SlideView = ({slides}) => {
    const data = slides.map((slide, index)=>{
        return <PatrnerPreview data={slide} key={slide.id}/>
    });
    return(
        <div className="slider__container">
        <Slider 
            speed={500}
            slidesToShow={5}
            slidesToScroll={1}
            dots={false}
            arrows={false}
            infinite={true}
            autoplay={true}
            centerMode={false}
            adaptiveHeight={false}
            vertical={true}
            centerPadding={'0px'}
            pauseOnFocus={false}
            focusOnSelect={false}
            rtl={false}
        >
            {data}
        </Slider>
        </div>
    );
}

export default SlideView;