import React, { Component } from 'react'
import image1 from '../../assets/images/golv1.jpg';
import image2 from '../../assets/images/katalog.jpg';
import image3 from '../../assets/images/inspiration.jpg';
import image4 from '../../assets/images/golvguide.jpg';
import Slide from './Slide';
import SlideButtons from './SlideButtons';
import './TopCarousel.css';

const slideList = [{ id: 1, text: "Ny katalog för kakel & klinker 2021", button: "Kika på katalogen", href: "/katalog", img: image1 },
{ id: 2, text: "Golvabiabloggen", button: null, href: null, img: image2 },
{ id: 3, text: "Bli inspirerad", button: "Se inspiration", href: "/inspiration", img: image3 },
{ id: 4, text: "Golvguiden", button: "Till golvguiden", href: "/golvguide", img: image4 }
]

const slideTime = 6000;

export class TopCarousel2 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        var numOfSlides = slideList.length;
        if (numOfSlides > 0) {
            this.timerID = setInterval(this.nextSlide, slideTime);
        }
        this.setState({ numOfSlides: numOfSlides, index: 1 });

    };

    componentWillUnmount = () => {
        clearInterval(this.timerID);
    }

    updateSlide = (e) => {
        var id = parseInt(e.target.getAttribute("data-id"));
        console.log(id);
        this.setState({ index: id });
    }

    startSlider = () => {
        this.timerID = setInterval(this.nextSlide, slideTime);
    }

    pauseSlider = () => {
        clearInterval(this.timerID);
    }

    nextSlide = () => {
        var { index, numOfSlides } = this.state;
        //console.log(`currentindex ${index} + numofslides ${numOfSlides}`)
        if (index === numOfSlides) {
            this.setState({ index: 1 })
        } else {
            this.setState({ index: index + 1 });
        }
    }

    render() {

        var numOfSlides = this.state.numOfSlides;
        var currentIndex = this.state.index;
        var currentSlide = slideList[currentIndex - 1];

        return (
            <div className="top-carousel">
                <div className="container-fluid">
                    <div className="row">
                        {numOfSlides > 0 ?
                            <div className="top-carousel" onMouseEnter={this.pauseSlider} onMouseLeave={this.startSlider}>
                                <SlideButtons slideList={slideList} index={currentIndex} updateSlide={this.updateSlide} />
                                <Slide slide={currentSlide} />
                            </div> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default TopCarousel2