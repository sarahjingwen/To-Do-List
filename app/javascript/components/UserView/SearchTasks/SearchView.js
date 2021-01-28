import React, {Fragment, useState} from 'react'
import SearchViewContents from './SearchViewContents'
import styled from 'styled-components'

const Box = styled.div`

	background: #fff;
    background-image: repeating-linear-gradient(white 0px, white 24px, #00808070 26px);
    width: 80%;
    margin: auto;
    padding: 20px 20px 20px 20px;
    margin-bottom: 80px;
    box-shadow: 0px 0px 0px 3px #473228,
      -10px 10px #ef5f17,
      -10px 10px 0px 3px #473228,
      -20px 20px #db417a,
      -20px 20px 0px 3px #473228,
      -30px 30px #ffcf49,
      -30px 30px 0px 3px #473228;
`

const CloseBtn = styled.button`
  color:#fff;
  background: #333;
  border-radius: 4px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: 1px solid #fff;
  width: 30px;
  font-size: 25px;
  margin-bottom: 10px;

  &:hover {
    background:#ffcf49;
    color:#000;
    border: 1px solid #fff;
  } 

`

const SearchView = ({task}) =>{
	const [show, setShow] = useState(true)
	const close = () => {
		setShow(false)
	}
	return (
		<div>
			{ show ? 
				<Fragment>
				<Box>
				<CloseBtn className="close" onClick={close}>
          			&times;
        		</CloseBtn>
        		<SearchViewContents task={task}/>
        		</Box>
        		</Fragment> : null }
        </div>
	)
}

export default SearchView