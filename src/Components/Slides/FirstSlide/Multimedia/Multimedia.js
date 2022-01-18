import s from './Multimedia.module.css'
import pink_sp_1 from './img/pink_sperm_1.png'
import bakt1 from './img/bakti_1.png'
import bakt2 from './img/bakti_2.png'
import bakt3 from './img/bakti_3.png'
import bakt4 from './img/bakti_4.png'

export const Multimedia = () => {
	return (
		<div className={s.box}>
			<img className={s.sperm} src={pink_sp_1} alt=""/>
			<img className={s.bakti1} src={bakt1} alt=""/>
			<img className={s.bakti2} src={bakt2} alt=""/>
			<div className={s.bakti_Block3}>
				<img className={s.bakti3} src={bakt3} alt=""/>
			</div>
			<img className={s.bakti4} src={bakt4} alt=""/>
		</div>
	)
}