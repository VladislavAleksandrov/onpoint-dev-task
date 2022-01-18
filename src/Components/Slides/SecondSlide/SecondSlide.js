import s from './SecondSlide.module.css'
import {Content} from "./Content/Content";
import {Sperm} from "./Sperms/Sperm";


export const SecondSlide = ({active, slideNumber}) => {
	return (
		<div className={s.slide}>
			<div className={s.background}/>
			<Content/>
			<Sperm active={active} slideNumber={slideNumber}/>
		</div>
	)
}