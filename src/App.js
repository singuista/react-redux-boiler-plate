//Depenency imports
import React 										from 'react'
import { BrowserRouter, Router, Route, Switch } 	from 'react-router-dom'
import {createBrowserHistory} 						from 'history'
import { Provider } 								from 'react-redux';
import configureStore 								from './store/Store'

//Views for Routes
//import Index 										from './views/index/Index'
import ProductListing 								from './views/products/ProductListing'
import NotFound 									from './views/404/NotFound'

//External dependencies 
import './App.scss'

const store = configureStore()
const history = createBrowserHistory()

function App() {
	return (
		<main className="App">
			<Provider store={store}>
				<BrowserRouter>
					<Router history={history}>
						<Switch>
							<Route exact path="/" component={ProductListing} />
							<Route path="/products" component={ProductListing} />
							<Route path="*" component={NotFound}/>
						</Switch>
					</Router>
				</BrowserRouter>
			</Provider>
		</main>
	)
}

export default App
