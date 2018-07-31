const initialState = {
	profile: {},
	repos: []
}

export default function (state = initialState, action) {
	switch(action.type) {
		case 'STATIC_DATA':
			return {...state, profile:action.payload}
		case 'GET_REPO':
			return {...state, repos:action.payload}
		default:
			return state
	}
}