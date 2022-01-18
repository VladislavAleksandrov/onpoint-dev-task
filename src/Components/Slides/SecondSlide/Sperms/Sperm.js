import s from './Sperm.module.css'

export const Sperm = ({active, slideNumber}) => {
	const animationClass = (active) ? s.startAnimation : ''
	const pasiveClass = (slideNumber === 3) ? s.thirdSlideAnimation : ''
	return (
		<div className={`${s.box} ${animationClass} ${pasiveClass}`}>
			<img className={s.sperm1} src="/img/slide2/sperm1.png" alt="sperm"/>
			<img className={s.sperm2} src="/img/slide2/sperm2.png" alt="sperm"/>
			<img className={s.sperm3} src="/img/slide2/sperm3.png" alt="sperm"/>
			<img className={s.sperm4} src="/img/slide2/sperm4.png" alt="sperm"/>
			<img className={s.sperm5} src="/img/slide2/sperm5.png" alt="sperm"/>
		</div>
	)
}