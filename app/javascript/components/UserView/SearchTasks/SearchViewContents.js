import React, {Fragment} from 'react'
import Task from '../ShowTasks/Task'
import UpdateModal from '../UpdateTasks/UpdateModal'
import DeleteBtn from '../DeleteTasks/DeleteBtn'

const SearchViewContents = ({task}) =>{

	return (
		<Fragment>
			<Task task={task}/>
			<UpdateModal task={task}/>
			<DeleteBtn id={task.attributes.id}/>
		</Fragment>
	)
}

export default SearchViewContents