import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from './views/index/Index'
import NotFound from './views/404/NotFound'
import './App.css'


function App() {
	return (
		<main className="App">
			<header>This is the Header</header>

			<Switch>
				<Route exact path="/" component={Index} />
				<Route path="*" component={NotFound}/>
			</Switch>
		</main>
	);
}

export default App;
