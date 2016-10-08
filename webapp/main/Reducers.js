import { combineReducers } from 'redux'
/*
	Import all reducers HERE

	exemple : import login from '../bundles/Login/reducers/loginReducer'
*/
import example from '../bundles/_example/reducers/exampleReducer'

/*
	Combine reducers here
*/

const rootReducer = combineReducers({
	example
})

export default rootReducer
