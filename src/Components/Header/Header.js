import s from './Header.module.css'
import home from './img/home.svg'

export const Header = ({homeClick}) => {
	return (
		<header className={s.header}>
			<button onClick={homeClick} className={s.button}>
				<img className={s.img} src={home} alt="home"/>
			</button>
			<p className={s.text}>Project</p>

		</header>
	)
}