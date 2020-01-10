import React, { Component } from 'react';
import Product from "./Product";


export default class ProductList extends Component {
    render() {
        const { products } = this.props;

        return (
            <React.Fragment>
                <div className="py-5">
                    <h1 className="text-center">
                        Our Products
                    </h1>
                    <div className="container">
                        <div className="row">
                        { 
                        products.map( product => {
                            return <Product key={product.id} product = {product} />; //handleDetail = {value.handleDetail}
                        })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
