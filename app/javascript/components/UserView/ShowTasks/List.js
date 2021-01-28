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
    background: #fff;
    background-image: repeating-linear-gradient(white 0px, white 24px, #00808070 26px);
    width: 500px;
    padding: 10px;
    box-shadow: 0px 0px 0px 3px #473228,
      5px -5px #ef5f17,
      5px -5px 0px 3px #473228,
      10px -10px #db417a,
      10px -10px 0px 3px #473228,
      15px -15px #ffcf49,
      15px -15px 0px 3px #473228;
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