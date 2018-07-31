import { createStore } from 'redux'

import githubReducer from './reducers/githubReducer'

const store = createStore(githubReducer)

export default store