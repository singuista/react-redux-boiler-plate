import React 						from 'react'
import { Router, Route, Switch } 	from 'react-router-dom'
import Index 						from './views/index/Index'
import ProductListing 				from './views/products/ProductListing'
import NotFound 					from './views/404/NotFound'
import {createBrowserHistory} 		from 'history'
import './App.scss'

console.log(createBrowserHistory)

const HISTORY = createBrowserHistory()

function App() {
	return (
		<main className="App">
			<Router history={HISTORY}>
				<Switch>
					<Route exact path="/" component={Index} />
					<Route path="/products" component={ProductListing} />
					<Route path="*" component={NotFound}/>
				</Switch>
			</Router>
		</main>
	)
}

export default App
