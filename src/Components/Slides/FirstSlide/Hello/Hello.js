import s from './Hello.module.css'
import {Button} from "../../../Button/Button";
import button from './img/buttonArrow.png'

export const Hello = ({nextClick}) => {
	return (
		<div className={s.content}>
			<p className={s.small}>
				привет,
			</p>
			<div className={s.container}>
				<p className={s.light}>
					это <span className={s.extraBold}>не</span> коммерческое задание
				</p>
				<Button text='Что дальше' imgUrl={button} alt='🠖' s={s} fun={nextClick}
				 />
			</div>

		</div>
	)
}