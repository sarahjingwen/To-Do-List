import React, { Fragment} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	width:100%;
	height:100%;
	background: #fff;
	background-image: repeating-linear-gradient(white 0px, white 24px, #00808070 26px);
	padding-top:100px;
`

const Box = styled.div`
	background: #fff;
	background-image: repeating-linear-gradient(white 0px, white 24px, #00808070 26px);
	width: 50%;
	margin: auto;
	padding: 60px 20px;
	text-align:center;
	vertical-align: middle;
	box-shadow: 0px 0px 0px 3px #473228,
		-10px 10px #ef5f17,
		-10px 10px 0px 3px #473228,
		-20px 20px #db417a,
		-20px 20px 0px 3px #473228,
		-30px 30px #ffcf49,
		-30px 30px 0px 3px #473228;

`
const Title = styled.div`
	font-family: "Courier New", "Arial";
	font-weight: 700px;

`
const Login = styled.div`
	margin:40px 0 20px 0;
	height: 50px;

	a{
		color: #fff;
		background: #000;
		border-radius:4px;
		padding:10px 50px;
		border:2px solid #000;
		width:100%;
		text-decoration: none;
		font-family: "Courier New", "Arial"
	}
`
const Signup = styled.div`
	margin:20px 0 20px 0;
	height: 50px;

	a{
		color: #fff;
		background: #000;
		border-radius:4px;
		padding:10px 43px;
		border:3px solid #000;
		width:100%;
		text-decoration: none;
		font-family: "Courier New", "Arial"
	}
`

const Home = () =>{
	return (
		<Wrapper>
			<Box> 
				<Title>
					<h1> Just Another To-Do List. </h1>
				</Title>
				<Login>
					<Link to='/login'>Login</Link>
				</Login>
				<Signup>
					<Link to='/signup'>Sign Up</Link>
				</Signup>
			</Box>
		</Wrapper>
	)
}

export default Home