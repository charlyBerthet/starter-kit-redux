import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router'
import App from './App'
import configureStore from './configureStore'

import '../styles/sass/index.scss'




/*
	IMPORT COMPONENTS FOR ROUTING
				<Bundle>_<Component>
	ex : import Login_LoginHome from './bundles/Login/components/HomeSigninOrJoinComponent'
*/
import example from '../bundles/_example/containers/ExampleContainer'


/*
	CREAT THE STORE
*/
const store = configureStore()



/*
	ROUTING
*/
render(
  <Provider store={store}>
  	<Router history={browserHistory}>
	    <Route component={App}>

	    	<Route path="/" component={example} />

	    </Route>
	</Router>
  </Provider>,
  document.getElementById('root')
)
