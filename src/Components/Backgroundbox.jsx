import React from 'react';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment, TextField, Box, Grid} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const useStyles = makeStyles({
    back: {
      backgroundColor: (props) => props.color + "!important", 
      padding: "10px 30px !important",       
    },
    inputBox: {
      backgroundColor: "#F7F8FC !important",
      border: "1px solid #0638920A !important",
      borderRadius: "4px",
      width:'200px',
      padding:'5px',
      fontSize:'14px !important',
      '& div': {
        padding : "0px",
      },
    },
    searchBox: {
      backgroundColor: "#F7F8FC !important",
      border: "1px solid #0638920A !important",
      borderRadius: "4px",
      padding:'5px',
      width: "60%",
      '& input': {
        padding : "4px",
      }
    },
  });

const Backgroundbox = (props) => {
  const classes = useStyles(props);
  const [input,setInput] = useState(
    {
    deposit: 10 ,
    })
const handleChange = (e) => {
    setInput((prevState)=>({
        ...prevState , [e.target.name]:e.target.value}));
}
  return (
    <>
      <Box component="section" className={classes.back}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
          <FormControl >
            <Select
              className={classes.inputBox} 
              value={input.deposit}
              onChange={handleChange}
              name="deposit"
            >
              <MenuItem value={10}>Deposit Request</MenuItem>
              <MenuItem value={20}>Withdrawl Transaction</MenuItem>
              <MenuItem value={30}>Withdrawl Request</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField 
              label="Search here"
              className={classes.searchBox} 
              InputProps={{
                startAdornment: <InputAdornment position='start'>
                                  <SearchIcon 
                                    style={{color:"#063892"}}/>
                                </InputAdornment>}}>
            </TextField>        
          </Grid>      
        </Grid>       
      </Box>
    </>
  )
}

export default Backgroundbox