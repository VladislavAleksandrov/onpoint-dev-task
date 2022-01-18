import s from './ThirdSlide.module.css'
import React, {useState} from "react";
import {Main} from "./Main/Main";
import {Media} from "./Media/Media";
import {Modal} from "./Modal/Modal";

export const ThirdSlide = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className={s.slide}>
			<div className={s.background}/>
			<Main isOpen={isOpen} setOpen={setOpen}/>
			<Media/>
			<Modal isOpen={isOpen} setOpen={setOpen}/>
		</div>
	)
}