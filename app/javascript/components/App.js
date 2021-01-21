import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './UserAuth/Home'
import Login from './UserAuth/Login'
import Signup from './UserAuth/SignUp'
import Todolist from './UserView/ToDoList'


class App extends Component {
	constructor(props) {
    super(props);
    this.state = { 
      	isLoggedIn: false,
      	user: {}
     };
  }

  componentDidMount() {
    this.loginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      	isLoggedIn: true,
      	user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
    	isLoggedIn: false,
    	user: {}
    })
  }

  loginStatus = () => {
    axios.get('/logged_in', {withCredentials: true})
    .then(response => {
      	if (response.data.logged_in) {
        	this.handleLogin(response)
      	} else {
        	this.handleLogout()
      	}
    })
    .catch(error => console.log('api errors:', error))
  }

	render(){
		return (
			<div>
				<Switch>
					<Route path="/login" render={props => (
              			<Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              			)}
            		/>
					<Route path="/signup" render={props => (
              			<Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              			)}
            		/>
          <Route path="/todolist" render={props => (
            			<Todolist {...props} loggedInStatus={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
            			)}
            		/>
					<Route path="/" render={props => (
              			<Home {...props} loggedInStatus={this.state.isLoggedIn}/>
              			)}
					/>
				</Switch>
			</div>
		)
	}
}

export default App