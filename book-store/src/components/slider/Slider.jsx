import "./slider.css";
import { useState } from "react";
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";
const Slider = ()=>{
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction === "left"){
            setSlideIndex(slideIndex - 1);
        }else{
            setSlideIndex(slideIndex + 1);
        }
    }
    return (
        <div className="slider-container">
            {slideIndex !== 0 && <i onClick={()=> handleClick("left")} className="bi bi-chevron-double-left arrow-left"></i>}
            <div style={{transform:`translateX(${slideIndex * -100}vw)`}} className="slider-wrapper">
                <div className="slide first-slide">
                    <div className="slide-img-wrapper">
                        <img src={FirstBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">Book Store</h1>
                        <p className="slide-info-desc">
                            It's not just reading. Its living the adventure
                        </p>
                    </div>
                </div>
                <div className="slide second-slide">
                    <div className="slide-img-wrapper">
                        <img src={SecondBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">The Books for everyone</h1>
                        <p className="slide-info-desc">
                            You can read at home or at the book store
                        </p>
                    </div>
                </div>
                <div className="slide third-slide">
                    <div className="slide-img-wrapper">
                        <img src={ThirdBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">Check out the new title</h1>
                        <p className="slide-info-desc">
                            We send you the book you wont at home
                        </p>
                    </div>
                </div>

            </div>
            {slideIndex !== 2 && <i onClick={()=> handleClick("right")} className="bi bi-chevron-double-right arrow-right"></i>}
        </div>
    );
}
export default Slider