import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: '',
            productName: '',
            price: 0 
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const {image, productName, price} = this.state
        return(
            <div>
                <span>Image URL:</span>
                <input name='image' value={this.state.image} onChange={e => this.handleChange(e)} />
                
                <span>Product Name:</span>
                <input name='productName' value={this.state.productName} onChange={e => this.handleChange(e)} />
                
                <span>Price:</span>
                <input name='price' value={this.state.price} onChange={e => this.handleChange(e)} />

                {/* <button onClick={ () => }>Cancel</button> */}
                <button onClick={ () => this.props.submit(image, productName, price)}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;