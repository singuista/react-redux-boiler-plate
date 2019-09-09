import React from 'react'
import { create } from "react-test-renderer"
import ProductListing from './ProductListing'

describe('ProductListing Component: ', () => {
    test('renders without crashing', () => {
        const view = create(<ProductListing />)
        expect(view.toJSON()).toMatchSnapshot()
    })

    test('product data returns JSON', () => {
        const view          = create(<ProductListing />)
        const instance      = view.getInstance()

        expect(typeof instance.state.productData).toBe('object')
    })

    test('returns dangerously set HTML', () => {
        const view          = create(<ProductListing />)
        const instance      = view.getInstance()
        
        expect(typeof instance.convertToJSX('<div></div>').__html).toBe('string')
    })

    test('Outputs JSX markup data', () => {
        const view          = create(<ProductListing />)
        const instance      = view.getInstance()
        
        expect(typeof instance.parseProductData()).toBe('object')
    })
})