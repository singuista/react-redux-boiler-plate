import React, {Component, Fragment }        from 'react'
import Header 					            from '../../components/header/Header'
import * as productData                     from '../../products.json'
import './productListing.scss'

class ProductListing extends Component {
    constructor(props) {
        super(props)
        
        const data = productData.default

        this.state = {
			selectedProductData: {
				price:  '0.01',
				name: '',
				label: '',
				image: 'https://dummyimage.com/200x200/000/fff'
			},
			showModal: false,
            productData: {
                data
            }
        }
	}

	/**
	 * Convert markup string to JSX
	 * @param {string} JSX formatted string
	 * @return {html} 
	**/
	convertToJSX = str => {
		return {__html: str}
	}

	/**
	 * Event Handler to purchase
	 * @param {number}  
	 * @return {void}
	**/
	purchaseItem = (name, label, cost, event) => {
		const price = (cost / 100) * 100

		this.setState({
			selectedProductData: {
				price,
				name, 
				label,
				image: 'https://dummyimage.com/200x200/000/fff'
			}
		}, () => {
			this.showModal()
		})
	}

	/**
	 * Change the state to open the modal
	 * @return {void}
	**/
	showModal = () => {
		this.setState({showModal: true})
	}

	/**
	 * Change the state to close the modal
	 * @return {void}
	**/
	closeModal = () => {
		this.setState({showModal: false})
	}

	/**
	 * Take Product data that is state from the JSON files and output makeup around it
	 * @return {jsx}
	**/
    parseProductData() {
        const {productData} = this.state

        let markup = productData.data.map((el, i) => {
			const {name, description, form} = el
			
            return (
                <div className="productItem" key={`productItem-${i}`}>
					<aside className="productItem__image"><img src="https://dummyimage.com/240x4:3" /></aside>
					<div className="productItem__info">
						<h2 className="productItem__name">{name}</h2>
						<p>{description}</p>
					</div>
                    <div className="productItem__pricingContainer" dangerouslySetInnerHTML={this.convertToJSX(form)} />
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