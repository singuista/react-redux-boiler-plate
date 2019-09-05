import React from 'react'
import { create } from "react-test-renderer"
import ProductListing from './ProductListing'


describe('ProductListing Component', () => {
    test('renders without crashing', () => {
        const view = create(<ProductListing />)
        expect(view.toJSON()).toMatchSnapshot();
    })
})