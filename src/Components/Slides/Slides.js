import {FirstSlide} from "./FirstSlide/FirstSlide";
import s from './Slides.module.css'
import {SecondSlide} from "./SecondSlide/SecondSlide";
import {ThirdSlide} from "./ThirdSlide/ThirdSlide";
import React, {useState} from "react";
import throttle from "lodash/throttle";
import bg from './img/bg.jpg'

export const Slides = React.forwardRef(({nextClick}, ref) => {

	const [slideNumber, setSlideNumber] = useState(1)

	const onScroll = throttle((event) => {
		let num = (event.target.scrollLeft / 1024 + 1).toFixed(0);
		setSlideNumber(+num);
	}, 200)

	return (
		<div ref={ref} className={s.slides} onScroll={onScroll}>
			<div className={s.back} style={{ backgroundImage: `url(${bg})`}}/>
			<FirstSlide active={slideNumber === 1} nextClick={nextClick}/>
			<SecondSlide active={slideNumber === 2} slideNumber={slideNumber}/>
			<ThirdSlide active={slideNumber === 3}/>


		</div>
	)
})