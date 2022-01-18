import s from './Modal.module.css'
import {Title} from "../Title/Title";
import React, {useState} from "react";
import btn_left from './img/btn_1.png'
import btn_right from './img/btn_next.png'
import btn_close from './img/btnClose.png'
import bgDark from './img/bgDark.png'



export const Modal = ({isOpen, setOpen, active}) => {

	const [slide, setSlide] = useState(1)

	if (!active) setOpen(false)

	return (

		<div className={s.background} hidden={!(isOpen)} style={{ backgroundImage: `url(${bgDark}) `}}>
			{

			}
			<div className={s.popUp}>
				<div className={s.list}>
					<div className={slide === 1 ? s.slideVisible : s.slideInvisible}>
						<p>01<br/>
							<span>Lorem ipsum dolor sit amet, consectetur
							adipiscing elit</span>
						</p>
						<p>02<br/>
							<span>Faucibus pulvinar elementum integer enim</span>
						</p>
						<p>03<br/>
							<span>Faucibus pulvinar elementum integer enim</span>
						</p>
					</div>

					<div className={slide === 2 ? s.slideVisible : s.slideInvisible}>
						<p>04<br/>
							<span>Mi bibendum neque egestas congue quisque egestas diam</span>
						</p>
						<p>05<br/>
							<span>Venenatis lectus magna fringilla urna</span>
						</p>
						<p>06<br/>
							<span>Venenatis lectus magna fringilla urna</span>
						</p>
					</div>


				</div>
				<div className={s.navButtons}>
					<button className={s.buttonLeft} onClick={() => {
						if (slide > 1) {
							setSlide(slide - 1)

						}
					}}><img src={btn_left} alt="<"/></button>
					<div className={s.pointDisabled + ' ' + (slide === 1 ? s.pointActive : null)}/>
					<div className={s.pointDisabled + ' ' + (slide === 2 ? s.pointActive : null)}/>
					<button className={s.buttonRight} onClick={() => {
						// console.log(myRef.current)
						if (slide < 2) setSlide(slide + 1)
					}}
					><img src={btn_right} alt=">"/></button>
				</div>
				<button onClick={() => setOpen(false)} className={s.btnClose}><img src={btn_close} alt="X"/>
				</button>
			</div>
			<Title title='Преимущества' s={s}/>
		</div>

	)
}