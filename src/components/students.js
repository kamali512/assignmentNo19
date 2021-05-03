import { useState } from "react";
import { data } from "./data";
import StudentList from './studentList';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './style.css'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },

  },
}));

function Students() {
    const [students, setStudents] = useState(data)
    const [errorMessage, setMessage] = useState("");
    const [name, setName] = useState("")
    const [Batch, setBatch] = useState("")
    const [roll, setRoll] = useState("")
    const [stuClass, setStuClass] = useState("")
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState(0)
     const deleteHandler = (index) => {
        // console.log('name', stuname);

        let newStudents = students.filter((student, i) => {
            if (i !== index) {
                return student;
            }
        });

        setStudents([...newStudents]);

        console.log("newStudents", newStudents);
    }

    const updateHandler = (student, index) => {

       
        setUpdatedIndex(index);
        setName(student.name);
        setStuClass(student.class);
        setRoll(student.roll);
        setBatch(student.batch);
        setFlag(true);

    }

    const ctaHandler = () => {
        setMessage("")

        if (name !== "" && Batch !== "" && roll !== "" && stuClass !== "") {
            let student = {
                name,
                batch: Batch,
                roll,
                class: stuClass
            }
            console.log("student", student);



            setStudents([...students, student]);
            setName("");
            setStuClass("");
            setRoll("");
            setBatch("");

        }
        else {
            setMessage(" Found few of params empty! Params can't be empty.")
        }


        // new data add in student list
    }


    const ctaUpdateHandler = () => {
        setMessage("")

        if (name !== "" && Batch !== "" && roll !== "" && stuClass !== "") {
            let student = {
                name,
                batch: Batch,
                roll,
                class: stuClass
            }
            console.log("student", student);

            let updateStudents = students.map((stu,index) => {
                if (updatedIndex === index) {
                    return student
                }
            else {
            return stu;
        }
    })

    setStudents([...updateStudents]);
    setName("");
    setStuClass("");
    setRoll("");
    setBatch("");
    setFlag(false);

}
    else {
    setMessage(" Found few of params empty! Params can't be empty.")
}
    }


    const classes = useStyles();

return (
    <div>
        <h1>New Student Add</h1>
        <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" value={name} name="name"  onChange={(e) => setName(e.target.value)}/>
      <TextField id="standard-basic" label="Batch" value={Batch} name="name"  onChange={(e) => setBatch(e.target.value)}/>
      <TextField id="standard-basic" label="Roll No" value={roll}  onChange={(e) => setRoll(e.target.value)}/>
      <TextField id="standard-basic" label="Class" value={stuClass}  onChange={(e) => setStuClass(e.target.value)}/>
      </form>

      <div className={classes.root}>
{flag ? 
      <Button variant="contained"  color="secondary" onClick={ctaUpdateHandler}>
       Update
      </Button>
      :
      <Button variant="contained"color="primary" onClick={ctaHandler}>
       Submit
      </Button>
        }
    </div>

        <p style={{ backgroundColor: "red", color: 'white' }}>
            {
                errorMessage
            }
        </p>
        <hr />
        <h1>List of students</h1>
     <Grid item xs={12} sm={12} md={12}>
    <TableContainer component={Paper}>
      <Table>
        <TableHead >
          <TableRow >
          <TableCell >NO</TableCell>
            <TableCell>Student Name</TableCell>
            <TableCell className='head'>Roll No</TableCell>
            <TableCell  className='head'>Batch</TableCell>
            <TableCell  className='head'>Class</TableCell>
            <TableCell  className='head'>Delete</TableCell>
            <TableCell  className='head'>Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           
             {students.map((item, index)=>
             {
                 return( 
                    <StudentList index={index} student={item} deleteHandler={deleteHandler} updateHandler={updateHandler} />
                  );
             } )} 
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </div>
)
}

export default Students;