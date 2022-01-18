import s from './Main.module.css'
import React, {useState} from "react";
import {Button} from "../../../Button/Button";
import {Title} from "../Title/Title";

export const Main = ({isOpen, setOpen}) => {

	const openModal = () => setOpen(true)


	return (



		<div className={s.container}>
			<Title title='Ключевое сообщение' s={s}/>
			<div className={s.content}>

				<div className={s.firstBlock}>
					<p>Ehicula ipsum a arcu
						cursus vitae. Eu non
						diam phasellus
						vestibulum lorem sed
						risus ultricies
					</p>
					<img className={s.dishes} src="/img/slide3/dishesIcon.png" alt="dishes"/>
				</div>

				<div className={s.secondBlock}>
					<p>A arcu
						cursus vitae
					</p>
					<img className={s.dates} src="/img/slide3/datesIcon.png" alt="calendar"/>
				</div>
				<Button text="Подробнее" imgUrl="/img/slide3/buttonPlus.png" alt='+' s={s} fun={openModal}/>

			</div>
		</div>
	)
}