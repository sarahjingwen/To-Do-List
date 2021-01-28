import React, { Component } from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`

const Header = styled.div`
  font-family: "Courier New", "Arial";
  font-size: 15px;
`

const Field = styled.div`
  border-radius: 4px;

  input {
    height:10px;
    border-radius: 4px;
    border: 2px solid #000;
    margin: 10px 0px;
    padding: 10px;
    width:75%;
    font-family:"Courier New", "Arial";
    color: #000;
    font-weight:600;
  }

  textarea {
    height: 60px;
    border-radius: 4px;
    border: 2px solid #000;
    margin: 10px 0px;
    padding: 10px;
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

class UpdateForm extends Component {
	constructor(props) {
    	super(props);
	    this.state = { 
      		title: this.props.task.attributes.title,
      		description: this.props.task.attributes.description,
      		duedate: this.props.task.attributes.duedate,
      		category: this.props.task.attributes.category,
      		errors: '',
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
    	const {title, description, duedate, category} = this.state
    	const url = `/tasks/${this.props.task.attributes.id}`

    	let task = {
      		title: title,
      		description: description,
      		duedate: duedate,
      		category: category,
    	}
    	
    	axios.put(url, {task}, {withCredentials: true})
    	.then(response => {
      		window.location.reload()
      	} )
    	.catch(error => console.log('api errors:', error))
    }

  	render() {
  		const {title, description, duedate, category} = this.state
    return (
      <Wrapper>
      <form onSubmit={this.handleSubmit}>
        <Header><h1>Update Task</h1></Header>
        <Field>
        <label for="title">Title:</label> 
          <br></br> 
				  <input
            id="title"
            placeholder="title"
            type="text"
            name="title"
            defaultValue={title}
            onChange={this.handleChange}/>
          <br></br>
          <label for="description">Description:</label>
          <br></br>  
          <textarea
            rows="10"
            cols="30"
            id="description"
            placeholder="description"
            type="text"
            name="description"
            defaultValue={description}
            onChange={this.handleChange}/>
          <br></br>
          <label for="duedate">Duedate:</label>
          <br></br>  
          <input
            placeholder="duedate"
            type="date"
            name="duedate"
            defaultValue={duedate}
            onChange={this.handleChange}/>
          <br></br>
          <label for="category">Category:</label> 
          <br></br> 
          <input
            id="category"
            placeholder="category"
            type="text"
            name="category"
            defaultValue={category}
            onChange={this.handleChange}/>
          </Field>
          <SubmitBtn placeholder="submit" type="submit">Update</SubmitBtn> 
      </form>
      </Wrapper>
      )
   	}
}

export default UpdateForm