export const Title = ({title, s}) => {
	return (
		<div className={s.textBlock}>
			<p className={s.title}>{title}</p>
			<br/>
			<h1 className={s.brend}>BREND <span className={s.extraBold}> XY</span></h1>
		</div>
	)
}