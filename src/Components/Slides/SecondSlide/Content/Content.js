import s from './Content.module.css'

export const Content = () => {
	return (
		<section className={s.content}>
			<h2 className={s.title}>Текст сообщения</h2>
			<div className={s.whiteBlock} >
				<div className={s.scrollTrack}/>
			</div>
			<div className={s.textBlock}>
				<p className={s.text}>
					<span className={s.boldText}>Lorem ipsum dolor sit amet,</span>
					consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
					Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
					tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget
					felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam
					dignissim diam quis enim lobortis. Est sit amet facilisis magna. <br/>
					Neque laoreet suspendisse interdum consectetur libero id. <br/>
					Nec ullamcorper sit amet risus nullam eget felis eget. <br/>
					Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. <br/>
					Euismod quis viverra nibh cras pulvinar mattis nunc. <br/>
					Massa massa ultricies mi quis. Sit amet massa vitae tortor
					condimentum lacinia. Et malesuada fames ac turpis egestas <br/>
					integer eget. Elementum pulvinar etiam non quam lacus suspendisse
					faucibus interdum posuere.
					<br/> <br/>
					Amet justo donec enim diam vulputate ut pharetra sit. <br/>
					Risus ultricies tristique nulla aliquet enim tortor at auctor. <br/>
					Velit sed ullamcorper morbi tincidunt ornare massa. <br/>
					Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim
					diam quis enim. Gravida neque convallis a cras. Ut enim blandit
					volutpat maecenas volutpat. Mauris sit amet massa vitae tortor
					condimentum lacinia quis vel. <br/>
				</p>
				<div className={s.boxForPadding}/>

			</div>
		</section>
	)
}