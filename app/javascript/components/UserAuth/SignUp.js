import React, {Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #fff;
  background-image: repeating-linear-gradient(white 0px, white 24px, #00808070 26px);
  position: absolute;
  top: 0;
  width:100%;
  height:100%;
`
const Box = styled.div`
  width: 50%;
  margin: auto;
  text-align:center;
  padding-top: 30px;
  padding-bottom: 30px;
`

const Header = styled.div`
  font-family: "Courier New", "Arial";
  font-size: 25px;
`

const Field = styled.div`
  border-radius: 4px;

  input {
    height:20px;
    border-radius: 4px;
    border: 2px solid #000;
    margin: 20px 0px;
    padding: 12px;
    width:75%;
    font-family:"Courier New", "Arial";
    color: #000;
    font-weight:600;
  }

  label {
    font-family: "Courier New", "Arial";
    font-weight: 700;
    font-size: 20px;
    width: 40%;
    padding: 20px 0px 0px 0px;
  }
`

const SubmitBtn = styled.button`
  color:#fff;
  background: #333;
  border-radius: 4px;
  padding: 12px;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: 1px solid #fff;
  width: 30%;
  margin-top:20px;
  font-family: "Courier New", "Arial";
  font-weight:500;

  &:hover {
    background:#ffcf49;
    color:#000;
    border: 1px solid #fff;
  } 
`

class Signup extends Component {
	constructor(props) {
    	super(props);
    	this.state = { 
      		username: '',
      		password: '',
      		password_confirmation: '',
      		errors: ''
    	};
  	}

  	handleChange = (event) => {
    	const {name, value} = event.target
    	this.setState({
      		[name]: value
    	})
  	}

  	handleSubmit = (event) => {
    	event.preventDefault()
    	const {username, password, password_confirmation} = this.state

	    let user = {
	      username: username,
	      password: password,
	      password_confirmation: password_confirmation
	    }

	    axios.post('/users', {user}, {withCredentials: true})
	    .then(response => {
	      if (response.data.logged_in) {
	        this.props.handleLogin(response.data)
	        this.redirect()
	      } else {
	        this.setState({
	          errors: response.data.errors
	        })
	        console.log(this.state.errors)
	      }
	    })
	    .catch(error => console.log('api errors:', error))
	  };

  	redirect = () => {
    	this.props.history.push('/todolist')
  	}

	render() {
      const {username, password, password_confirmation} = this.state
    	return (
      	<Wrapper>
          <Box>      
      			<form onSubmit={this.handleSubmit}>
              <Header>
      				  <h1>Sign Up</h1> 
              </Header> 
              <Field>
                  <label for="username">Username:</label>
                  <br></br> 
                	<input
                      id="username"
                  		placeholder="username"
                  		type="text"
                  		name="username"
                      	value={username}
                      	onChange={this.handleChange}/>
                  <br></br> 
                  <label for="password">Password:</label>
                  <br></br> 
      		        <input
                      id="password"
      		            placeholder="password"
      		            type="password"
      		            name="password"
                      	value={password}
                      	onChange={this.handleChange}/>
                  <br></br> 
                  <label for="password-confirmation">Password Confirmation:</label>
                  <br></br> 
            			<input
                      id="password-confirmation"
            					placeholder="retype password"
            					type="password"
            					name="password_confirmation"
            					value={password_confirmation}
            					onChange={this.handleChange}/> 
              </Field>        
      				<SubmitBtn placeholder="submit" type="submit">Sign Up</SubmitBtn>          
          </form>
        </Box>
      </Wrapper>
    );
  }
}

export default Signup