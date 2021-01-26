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
`

const Box = styled.div`
  width: 50%;
  margin: auto;
  text-align:center;
  padding-top: 30px;
  padding-bottom: 30px
`

const Header = styled.div`
  font-family: "Courier New", "Arial";
  font-size: 25px;
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

const NavBar = styled.div`
	height: 100%;
    width: 160px; 
  	position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  	z-index: 1; /* Stay on top */
  	top: 0; /* Stay at the top */
  	left: 0;
  	overflow-x: hidden; /* Disable horizontal scroll */
  	padding-top: 20px;
  	border-right: 3px solid #d77070;
`

const VertLine = styled.div `
	border-left: 6px solid green;
  	height: 100%;
`

const Todolist = (props) => {
	const [tasks, setTasks] = useState([])

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

		return(
			<Fragment>
				<Wrapper>
					<Box>
						<Header><h1>To-Dos</h1></Header>
						<NavBar>
						<CreateModal/>
						<StyledBtn onClick={handleLogoutApi}>Logout</StyledBtn>
						</NavBar>
						<VertLine></VertLine>
						<Autocomplete
        options={tasks}
      />
						<List tasks={tasks}/>
					</Box>
				</Wrapper>
			</Fragment>
			)
	
}

export default Todolist