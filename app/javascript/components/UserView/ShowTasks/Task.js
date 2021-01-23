import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Wrapper = styled.div`
	text-align: left;
	font-family: "Courier New", "Arial";
	font-weight: 500;
`

const AttributeName = styled.span`
	font-weight: 700;
`
const Task = ({task}) => {
	return (
		<Wrapper> 
			<AttributeName>Title:</AttributeName> {task.attributes.title}
			<br></br>
			<AttributeName>Description:</AttributeName> {task.attributes.description}
			<br></br>
			<AttributeName>Duedate:</AttributeName> {task.attributes.duedate}
			<br></br>
			<AttributeName>Category:</AttributeName> {task.attributes.category}
		</Wrapper>
		)
}

export default Task