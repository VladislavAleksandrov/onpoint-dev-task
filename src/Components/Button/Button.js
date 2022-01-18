// import s from "../Slides/FirstSlide/Hello/Hello.module.css";

export const Button = ({imgUrl, text, alt, s, fun}) => {
  return (
	  <button onClick={() => {
			fun()
	  }} className={s.button}>
		  <img className={s.buttonImg} src={imgUrl} alt={alt}/>
		  <span className={s.buttonText}>{text}</span>
	  </button>
  )
}