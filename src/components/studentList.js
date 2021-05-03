import React from 'react';
import Button from '@material-ui/core/Button';
import  './style.css'
function StudentList({student, index,deleteHandler, updateHandler}) {
   
    return (
       

        <tr>
        <td className='row'>{index+1}</td>
        <td className='row'>{student.name}</td>
        <td className='row roll'>{student.roll}</td>
        <td className='row batch'>{student.batch}</td>
        <td className='row '>{student.class}</td>
        <td className='row'>
        <Button variant="contained"  color="secondary" onClick={()=> deleteHandler(index)}>
   Delete
  </Button>
        </td>

        <td className='row'>
        <Button variant="contained"color="primary" onClick={()=> updateHandler(student, index)}>
        Update
  </Button>
        </td>
    </tr>


    )
}


export default StudentList;

