import React, { Component } from 'react';
import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 number">
                        Order your flower
                        <span>  +000 000 0000</span>
                        </div>
                        <div className="col-4 text-center">
                        <h1>Flower for any Occasion</h1>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                            <span><i class="fas fa-cart-arrow-down px-3"></i></span>
                            <span><i class="fab fa-facebook px-3"></i></span>
                            <span><i class="fab fa-instagram px-3"></i></span>
                            <span><i class="fas fa-map-marker-alt px-3"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
