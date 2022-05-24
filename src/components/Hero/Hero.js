import "./heroStyles.css"
import {BsChatText} from "react-icons/bs"

const Hero = () => {
    return (
        <div className = "hero__container">
            <div className = "hero__text">
                <span className = "first">Sustainability in your pocket</span>  
                <span className = "second">Building a future that's exciting!</span>
                <a href="#explore">Explore</a>
            </div>
            <button className = "letus__chat"><BsChatText /></button>
        </div>
    )
}


export default Hero
