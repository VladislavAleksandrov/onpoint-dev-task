import s from './Multimedia.module.css'

export const Multimedia = () => {
	return (
		<div className={s.box}>
			<img className={s.sperm} src="/img/slide1/pink_sperm_1.png" alt=""/>
			<img className={s.bakti1} src="/img/slide1/bakti_1.png" alt=""/>
			<img className={s.bakti2} src="/img/slide1/bakti_2.png" alt=""/>
			<div className={s.bakti_Block3}>
				<img className={s.bakti3} src="/img/slide1/bakti_3.png" alt=""/>
			</div>
			<img className={s.bakti4} src="/img/slide1/bakti_4.png" alt=""/>
		</div>
	)
}