import React, { useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup'
import Task from './Task'
import DeleteBtn from '../DeleteTasks/DeleteBtn'
import UpdateModal from '../UpdateTasks/UpdateModal'
import styled from 'styled-components'

const BlandBtn = styled.a`
  color:#000;
  background: #fff;
  font-size:30px;
  cursor: pointer;
  border: 1px solid #fff;
  font-family: "Courier New", "Arial";
  font-weight:700;
`

const StyledTooltip = styled(Popup)`
	&-content {
    background: #ffcf49;
    width: 500px;
    padding: 10px;
   	border: 2px solid #473228;
   	border-radius: 4px;
  }

  &-arrow {
  	color: #473228;
}
`

const Bullet = styled.div`
	margin: 20px;
	height:50px;
`

const Btn = styled.span`
	float:right;
	position: relative;
	top: -20px;

`

const List = (props) => {
	const tasks = props.tasks
	const showUpdate = props.showUpdate
	const showDelete = props.showDelete

	const bullets = tasks.map( item => {
		return (
			<Fragment>
				<Bullet>
				<input type="checkbox" />
				<label for={item.attributes.id}>
					<StyledTooltip
	    			trigger={open => (
	    				<BlandBtn  className="button">{item.attributes.title}</BlandBtn >
	    			)}
	    			position="right center"
	    			closeOnDocumentClick>
	    				<Task task={item}/>
	  				</StyledTooltip>
				</label>
				<Btn>
				{ showDelete ? <DeleteBtn id={item.attributes.id}/> : null }
				{ showUpdate ? <UpdateModal task={item}/> : null}
				</Btn>
				<br></br>
				</Bullet>
			</Fragment>
			)
	})

	return (
		<div>
			{bullets}
		</div>
		)
}

export default List