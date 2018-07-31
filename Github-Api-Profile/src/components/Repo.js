import React, { Component } from 'react'
import { getRepo } from '../actions/githubData'
import {connect} from 'react-redux'

class Repo extends Component {
	componentDidMount() {
		getRepo()
	}

 	render() {
  	return (
	 		<div className="dataContainer">
	 			<div className="repoBar">
		 				<input className="repoSearch" type="text" placeholder="Search repositories..."/>
		 				<div className="repoClasses">
		 					<button className="repoClass"> Type: All </button>
		 					<button className="repoClass"> Language: All </button>
		 				</div>
		 				<button className="repoNew"> <i className="fa fa-book" /> New </button>
	 			</div>
	 			{this.props.repos.map((data, i) => (
	 				<div className="repos">
	 					<div className="repoName">{data.name}</div>
	 					<div className="repoLanguage">{data.language}</div>
					</div>
	 			))}
	 		</div>
  	)
 	}
}

function mapStateToProps(appState) {
	return {
		repos: appState.repos,
		name: appState.repos.name,
		language: appState.repos.language,
	}
}

export default connect(mapStateToProps)(Repo)