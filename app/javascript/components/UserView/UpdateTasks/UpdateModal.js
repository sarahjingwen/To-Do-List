import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import UpdateForm from './UpdateForm'

const UpdateModal = ({task}) => {
  return (
  <Popup
    trigger={<button className="button">Update</button>}
    modal>
      {close => (
      <div>
        <button className="close" onClick={close}>
          &times;
        </button>
        <UpdateForm task={task}/>
      </div>
    )}
  </Popup>
  )
}

export default UpdateModal