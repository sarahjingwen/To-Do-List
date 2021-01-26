import React, { Component } from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup'

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
      <form onSubmit={this.handleSubmit}>
        <h1>Update Task</h1>
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
          <button placeholder="submit" type="submit">Create</button> 
      </form>
      )
   	}
}

export default UpdateForm