import React from 'react'
import Popup from 'reactjs-popup'
//import 'reactjs-popup/dist/index.css'
import styled from 'styled-components'
import CreateForm from './CreateForm'

const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }

  &-content {
    background: #fff;
    background-image: repeating-linear-gradient(white 0px, white 24px, #00808070 26px);
    width: 50%;
    padding: 10px 10px 40px 10px;
    box-shadow: 0px 0px 0px 3px #473228,
      -10px 10px #ef5f17,
      -10px 10px 0px 3px #473228,
      -20px 20px #db417a,
      -20px 20px 0px 3px #473228,
      -30px 30px #ffcf49,
      -30px 30px 0px 3px #473228;
  }
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

const CloseBtn = styled.button`
  color:#fff;
  background: #333;
  border-radius: 4px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: 1px solid #fff;
  width: 30px;
  font-size: 25px;

  &:hover {
    background:#ffcf49;
    color:#000;
    border: 1px solid #fff;
  } 

`

const CreateModal = () => (
  <StyledPopup
    trigger={<StyledBtn className="button">Create</StyledBtn>}
    modal>
      {close => (
      <div>
        <CloseBtn className="close" onClick={close}>
          &times;
        </CloseBtn>
        <CreateForm/>
      </div>
    )}
  </StyledPopup>
)

export default CreateModal