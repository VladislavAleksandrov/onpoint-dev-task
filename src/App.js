import './App.css'
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {Slides} from "./Components/Slides/Slides";
import {useRef} from "react";
import './fonts.css'

function App() {

	const sliderRef = useRef(null)

	const scrollToHome = () => {
		// console.log('clicked', sliderRef.current)
		sliderRef.current.scrollTo({
			left: 0,
			behavior: "smooth"
		})
	}
	
	const scrollToSecond = () => {
		sliderRef.current.scrollTo({
			left: 1024,
			behavior: "smooth"
		})
	}

	return (
		<div className="App">
			<Header homeClick={scrollToHome}/>
			<Slides ref={sliderRef} nextClick={scrollToSecond}/>
			<Footer/>
		</div>
	);
}

export default App;
