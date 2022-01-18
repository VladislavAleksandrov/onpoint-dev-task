import s from './Sperm.module.css'
import sperm_1 from './sperm1.png'
import sperm_2 from './sperm2.png'
import sperm_3 from './sperm3.png'
import sperm_4 from './sperm4.png'
import sperm_5 from './sperm5.png'

export const Sperm = ({active, slideNumber}) => {
	const animationClass = (active) ? s.startAnimation : ''
	const pasiveClass = (slideNumber === 3) ? s.thirdSlideAnimation : ''
	return (
		<div className={`${s.box} ${animationClass} ${pasiveClass}`}>
			<img className={s.sperm1} src={sperm_1} alt="sperm"/>
			<img className={s.sperm2} src={sperm_2} alt="sperm"/>
			<img className={s.sperm3} src={sperm_3} alt="sperm"/>
			<img className={s.sperm4} src={sperm_4} alt="sperm"/>
			<img className={s.sperm5} src={sperm_5} alt="sperm"/>
		</div>
	)
}