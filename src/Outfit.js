import React from 'react';
import './Outfit.css'
import logo from './images/outfit1.jpg';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';


const slideImages = [
    logo,
    logo,
    logo
];

class Outfit extends React.Component {
    render() {
        return (
            <div className="Outfit">
                <h1>Outfit of the week</h1>
                <Slideshow />

            </div>
        );
    }
}

class Slideshow extends React.Component {
    render() {
        return (
            <div className="slide-container">
                <Slide>
                    <div className="each-slide">
                        <img src={slideImages[0]} />
                    </div>
                    <div className="each-slide">
                        <img src={slideImages[1]} />

                    </div>
                    <div className="each-slide">
                        <img src={slideImages[2]} />
                    </div>
                </Slide>
            </div >
        );
    }
}


class ImageLink extends React.Component {
    render() {
        return (
            <div>
                <a href={this.props.link} target="_blank"><img src={this.props.src}></img></a>
            </div>
        )
    }
}

export default Outfit;
