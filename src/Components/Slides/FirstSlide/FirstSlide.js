import {Hello} from "./Hello/Hello";
import s from './FirstSlide.module.css'
import {Multimedia} from "./Multimedia/Multimedia";

export const FirstSlide = ({nextClick}) => {
	return (
		<div className={s.slide}>
			<div className={s.background}/>
			<Hello nextClick={nextClick}/>
			<Multimedia/>
		</div>
	)
}