import axios from 'axios'
import store from '../store'

export function staticData() {
	axios.get('https://api.github.com/users/keen12321').then(resp => {
		store.dispatch({
			type: 'STATIC_DATA',
			payload: resp.data
		})
	})
}

export function getRepo() {
	axios.get('https://api.github.com/users/Keen12321/repos').then(resp => {
		store.dispatch({
			type: 'GET_REPO',
			payload: resp.data
		})
	})
}