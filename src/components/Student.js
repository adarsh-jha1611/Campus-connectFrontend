import * as React from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';

export default function Student() {
  const paperStyle = { padding: '50px 20px', width: 500, margin: '20px auto', textAlign: 'center' };
  const textFieldStyle = { marginBottom: '10px' };
  const highlightStyle = { color: '#5271FF' };
  const [name, setName] = useState('');
  const [reg, setId] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const[student, setStudent]=useState([])

  const buttonStyle = { backgroundColor: '#5271FF', color: '#fff' };

  const handleClick=(e)=>{
    e.preventDefault()
    const student={name,reg,email,address}
    console.log(student)
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then(()=>{ 
      alert("New Student added")
      setName('');
        setId('');
        setEmail('');
        setAddress('');
    })
    
  }

  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudent(result);
    }
    )
  },[])

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '55ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Paper elevation={3} style={paperStyle}>
        <h1>
          Add. <span style={highlightStyle}>Student</span>
        </h1>

        <TextField
          id="outlined-basic"
          label="Student Name"
          variant="outlined"
          fullWidth
          style={textFieldStyle}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Reg. No"
          variant="outlined"
          fullWidth
          style={textFieldStyle}
          value={reg}
          onChange={(e) => setId(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          style={textFieldStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          fullWidth
          style={textFieldStyle}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <Button variant="contained" style={buttonStyle} onClick={handleClick}>
          Submit
        </Button>
      </Paper>
      <Paper elevation={3} style={paperStyle}>
      <h1>Stu<span style={highlightStyle}>dents</span></h1>

        {student.map(student=>(
          <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.id}>
            Id:{student.id}<br/>
            Name:{student.name}<br/>
            Address:{student.address}<br/>
            Email:{student.email}
            </Paper>
        ))}

      </Paper>
    </Box>
  );
}
