import React from 'react'
import { Button } from '@mui/material'
import axios from 'axios'

const Item = ({ commandId, siteName, managerName, operatorName, deleted }) => {
  const deleteItem = () => {
    axios.delete(`http://localhost:5000/form-submition/${commandId}`)
      .then(response => {
        console.log('Item deleted successfully', response);
        deleted(commandId);
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  return (
    <div className="list-item">
      <div className="content">
        <div className="content-info">{commandId}</div>
        <div className="content-info">{siteName}</div>
        <div className="content-info">{managerName}</div>
        <div className="content-info">{operatorName}</div>
      </div>
      <div className="action">
        { deleted && <Button variant="outlined" style={{ width: "50%", height: "104%" }}> details</Button> }
        { deleted && <Button variant="outlined" color="error" style={{ width: "50%", height: "104%" }} onClick={deleteItem}> delete</Button>}
      </div>
    </div>
  )
}


export default Item