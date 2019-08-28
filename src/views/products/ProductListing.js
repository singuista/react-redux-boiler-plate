import React, {Component, Fragment }        from 'react'
import Header 					            from '../../components/header/Header'
import * as productData                     from '../../products.json'
import './productListing.scss'

class ProductListing extends Component {
    constructor(props) {
        super(props)
        
        const data = productData.default

        this.state = {
            productData: {
                data
            }
        }
    }

    parseProductData() {
        const {productData} = this.state

        //console.log(productData.data)

        let markup = productData.data.map((el, i) => {
            const {name, description, price} = el

            let priceMarkup = price.options.map((el, j) => {
                const {label, cost} = el
                return (
                    <div key={`priceItem-${j}`}>
                        <strong>{label}</strong>: ${parseFloat(cost, 2)}
                    </div>
                )
            })

            return (
                <div className="productItem" key={`productItem-${i}`}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className="productItem__pricingContainer">
                        {priceMarkup}
                    </div>
                </div>
            )
        })

        return markup
    }

    render() {
        return(
            <Fragment>
                <Header 
                    className="header-products"
                >
                    Shae Butter Products Listing
                </Header>
                <section className="productListingContainer viewPadding">
                    {this.parseProductData()}
                </section>
            </Fragment>
        )
    }
}

export default ProductListing