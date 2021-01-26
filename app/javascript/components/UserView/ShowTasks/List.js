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
  font-size:18px;
  cursor: pointer;
  border: 1px solid #fff;
  font-family: "Courier New", "Arial";
  font-weight:500;
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

const List = ({tasks}) => {
	/*const [tasks, setTasks] = useState([])
	const [checked, setChecked] = useState(false)

	useEffect(()=>{
		axios.get('/tasks',{withCredentials: true})
		.then(response => {
			setTasks(response.data.data)
		})
		.catch(response => {
			console.log(response)
		})
	}, [tasks.length])

	const handleCheckboxChange = (event) => {
		setChecked(true)
	}*/

	const bullets = tasks.map( item => {
		return (
			<Fragment>
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
				<DeleteBtn id={item.attributes.id}/>
				<UpdateModal task={item}/>
				<br></br>
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