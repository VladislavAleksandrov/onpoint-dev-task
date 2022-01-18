import s from './Media.module.css'
import bottle from './img/bottle.png'
import pinkMed from './img/pinkMed.png'
import pinkBig from './img/pinkBig.png'
import pinkSmall from './img/pinkSmall.png'
import blueLeft from './img/blueLeft.png'
import blueBottom from './img/blueBottom.png'
import blueBottomSmall from './img/blueBottomSmall.png'
import blueTopNext from './img/blueTopNext.png'
import blueTop from './img/blueTop.png'


export const Media = () => {
  return (
		<>
			<img className={s.bottle} src={bottle} alt="bottle"/>
			<img className={s.pinkMed} src={pinkMed} alt=""/>
			<img className={s.pinkBig} src={pinkBig} alt=""/>
			<img className={s.pinkSmall} src={pinkSmall} alt=""/>
			<img className={s.blueLeft} src={blueLeft} alt=""/>
			<img className={s.blueBottom} src={blueBottom} alt=""/>
			<img className={s.blueBottomSmall} src={blueBottomSmall} alt=""/>
			<img className={s.blueTopNext} src={blueTopNext} alt=""/>
			<img className={s.blueTop} src={blueTop} alt=""/>
		</>
  )
}