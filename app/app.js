import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

import AppContainer from './containers/AppContainer'
import AppContainerWithCardStack from './containers/AppContainerWithCardStack'

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppContainerWithCardStack />
			</Provider>
		)
	}
}
