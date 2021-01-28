import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import axios from 'axios'
import styled from 'styled-components'

const StyledBtn = styled.button`
  color:#fff;
  background: #333;
  border-radius: 4px;
  padding: 12px;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: 1px solid #fff;
  width: 100px;
  margin-top:20px;
  font-family: "Courier New", "Arial";
  font-weight:500;

  &:hover {
    background:#ffcf49;
    color:#000;
    border: 1px solid #fff;
  } 
`

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
	        <StyledBtn onClick={handleDelete}>Delete</StyledBtn>
	      			
		)

	
}

export default DeleteBtn