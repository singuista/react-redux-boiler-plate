import React 					from 'react'
import { Route, Switch } 		from 'react-router-dom'
import Index 					from './views/index/Index'
import ProductListing 			from './views/products/ProductListing'
import NotFound 				from './views/404/NotFound'
import './App.scss'


function App() {
	return (
		<main className="App">
			<Switch>
				<Route exact path="/" component={Index} />
				<Route path="/products" component={ProductListing} />
				<Route path="*" component={NotFound}/>
			</Switch>
		</main>
	)
}

export default App
