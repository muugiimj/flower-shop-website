import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Product.css";


export default class Product extends Component {
    render() {
        const {flowerName, img, price, info, inCart} = this.props.product;
        return (
            <React.Fragment>
                <div className="col-9 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                        <img src={img} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{flowerName}</h5>
                            <p className="card-text">{info}</p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                        <h5 className="font-italic mb-0">
                            <span className="">$</span> {price}
                        </h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}



Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};