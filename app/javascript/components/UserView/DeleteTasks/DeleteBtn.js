import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import axios from 'axios'

const DeleteBtn = ({id}) => {

	const handleDelete = (event) => {
		event.preventDefault()
    	const url = `/tasks/${id}`

    	axios.delete(url)
    	.then(response => {
      		window.location.reload()
      	} )
    	.catch(error => console.log('api errors:', error))
	}

		return (
	        <button onClick={handleDelete}>Delete</button>
	      			
		)

	
}

export default DeleteBtn