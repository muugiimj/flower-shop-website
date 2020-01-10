import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mother from "./mother.jpg";
import valentine from "./valentine.jpg";
import birthday from "./birthday.jpg";
import "./Home.css";


export default class Home extends Component {

    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={mother}
                        alt="mother"
                    />
                    <Carousel.Caption className="text-right py-5 mothersDay">
                        <h2>Mother's Day</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={birthday}
                        alt="birthday"
                    />

                    <Carousel.Caption className="birthdaySlide">
                        <h2>Birthday Flowers</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={valentine}
                        alt="Valentine"
                    />

                    <Carousel.Caption className="valentineSlide">
                        <h2>For Her on <br/> Valentine's Day</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}