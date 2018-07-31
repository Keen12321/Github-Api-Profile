import React, { Component } from 'react'
import '../styles/App.css'
import store from '../store'
import {Provider} from 'react-redux'

import Home from './Home'

class App extends Component {
  render() {
    return (
    	<Provider store = {store}>
			    <div>
						<Home />
			    </div>
      </Provider>
    )
  }
}

export default (App)
