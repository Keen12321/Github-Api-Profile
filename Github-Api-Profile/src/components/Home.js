import React, { Component } from 'react'
import { staticData } from '../actions/githubData'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Repo from './Repo'

class Home extends Component {
	componentDidMount() {
		staticData()
	}
	render() {
		return (
			<Router>
				<div>
					<div className="topNav">
						<div className="topNavLeft">
							<i id="githubIcon" className="fa fa-github"></i>
							<input className="profileSearch" type="text" placeholder="Search or jump to..." />
							<div className="topNavText"> Pull requests </div>
							<div className="topNavText"> Issues </div>
							<div className="topNavText"> Marketplace </div>
							<div className="topNavText"> Example </div>
						</div>
						<div className="topNavRight">
							<i id="bellIcon" className="fa fa-bell"></i>
							<i id="plusIcon" className="fa fa-plus"></i>
							<img className="topAvatar" src={this.props.avatar} />
						</div>
					</div>
					<div className="container">
						<div className="profile">
							<img className="mainAvatar" src={this.props.avatar} />
							<div className="name">{this.props.name}</div>
							<div className="profileName">{this.props.login}</div>
							<button className="bio"> Add a bio </button>
						</div>
						<div className="data">
							<div className="tabContainer">
								<div className="tabContainerSpace">
									<Link className="tabs" to=""><div>Overview</div></Link>
									<Link className="tabs" to=""><div>Repositories {this.props.publicrepo}</div></Link>
									<Link className="tabs" to=""><div>Stars</div></Link>
									<Link className="tabs" to=""><div>Followers {this.props.followers}</div></Link>
									<Link className="tabs" to=""><div>Following {this.props.following}</div></Link>
								</div>
							</div>
							<Route exact path="/" component={Repo} />
						</div>
					</div>
				</div>
			</Router>
		)
	}
}

function mapStateToProps(appState) {
	return {
		login: appState.profile.login,
		avatar: appState.profile.avatar_url,
		name: appState.profile.name,
		publicrepo: appState.profile.public_repos,
		followers: appState.profile.followers,
		following: appState.profile.following
	}
}

export default connect(mapStateToProps)(Home)