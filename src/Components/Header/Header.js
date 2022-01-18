import s from './Header.module.css'

export const Header = ({homeClick}) => {
	return (
		<header className={s.header}>
			<button onClick={homeClick} className={s.button}>
				<img className={s.img} src="/img/home.svg" alt="home"/>
			</button>
			<p className={s.text}>Project</p>

		</header>
	)
}