import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import List from './ShowTasks/List'
import CreateModal from './CreateTasks/CreateModal'
import Autocomplete from './SearchTasks/Autocomplete'

const Wrapper = styled.div`
  background: #fff;
  background-image: repeating-linear-gradient(white 0px, white 24px, #00808070 26px);
  position: absolute;
  top: 0;
  width:100%;
  height:100%;
  padding-bottom: 100px;
`

const Box = styled.div`
  width: 70%;
  margin: auto;
  text-align:left;

  padding: 10px 10px 40px 10px;
    box-shadow: 0px 0px 0px 3px #473228,
      -10px 10px #ef5f17,
      -10px 10px 0px 3px #473228,
      -20px 20px #db417a,
      -20px 20px 0px 3px #473228,
      -30px 30px #ffcf49,
      -30px 30px 0px 3px #473228;
`

const Container = styled.div`
  width: 80%;
  padding: 5% 0 5% 20%;
`

const Header = styled.div`
  font-family: "Courier New", "Arial";
  font-size: 40px;
  text-align:center;
`

const StyledBtn = styled.button`
  color:#fff;
  background: #333;
  border-radius: 4px;
  padding: 12px;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: 1px solid #fff;
  width: 75%;
  margin-top:20px;
  font-family: "Courier New", "Arial";
  font-weight:500;

  &:hover {
    background:#ffcf49;
    color:#000;
    border: 1px solid #fff;
  } 
`

const NavBar = styled.div`
	height: 100%;
    width: 15%; 
  	position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  	z-index: 1; /* Stay on top */
  	top: 0; /* Stay at the top */
  	left: 0;
  	overflow-x: hidden; /* Disable horizontal scroll */
  	padding-top: 20px;
  	border-right: 3px solid #d77070;
    text-align:center;
`



const Todolist = (props) => {
	const [tasks, setTasks] = useState([])
  const [showUpdate, setShowUpdate] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  useEffect(()=>{
    axios.get('/tasks',{withCredentials: true})
    .then(response => {
      setTasks(response.data.data)
    })
    .catch(response => {
      console.log(response)
    })
  }, [tasks.length])

	const handleLogoutApi = () => {
		axios.delete('/logout', {withCredentials: true})
		.then(response => {
			if (!response.data.logged_in) {
        		props.handleLogout()
        		redirect()
      		} else {
        		console.log('logout error', error)
      		}
		})
		.catch(error => console.log('api error:', error))
	}

	const redirect = () => {
    	props.history.push('/')
  	}

  const handleUpdate = () => {
    setShowUpdate(!showUpdate)
    console.log(showUpdate)
  }

  const handleDelete = () => {
    setShowDelete(!showDelete)
    console.log(showDelete)
  }

		return(
			<Fragment>
				<Wrapper>
          <Container>
					<Box>
						<Header><h1>To-Dos</h1></Header>
						<Autocomplete
              options={tasks}
            />
						<List 
            tasks={tasks} 
            showDelete={showDelete}
            showUpdate={showUpdate}/>
					</Box>
          </Container>

          <NavBar>
            <CreateModal/>
            <StyledBtn onClick={handleDelete}>Delete</StyledBtn>
            <StyledBtn onClick={handleUpdate}>Update</StyledBtn>
            <StyledBtn onClick={handleLogoutApi}>Logout</StyledBtn>
            </NavBar>
				</Wrapper>
			</Fragment>
			)
	
}

export default Todolist