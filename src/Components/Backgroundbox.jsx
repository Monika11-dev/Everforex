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
        paddingLeft:"10px !important",
        color: "#011945 !important",
      },
      '& svg': {
         color: "#011945 !important",
      }
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
    inputBoxStyle: {
        position: 'relative',
       
        '& input.searchInput': {
            backgroundColor: "#F7F8FC !important",
            color: '#011945',

            fontSize: '12px',
            border: "1px solid #0638920A !important",
            padding: '7px 29px 7px 30px',
            width: "60%",
            borderRadius: '4px',
            letterSpacing: '.5px',
            fontWeight: '500',
            textOverflow: 'ellipsis',
        },
        '& svg': {
            position: 'absolute',
            top: '50%',
            left: '5px',
            transform: 'translateY(-50%)',
            color: '#063892 !important',
            fontSize: '23px',
        },
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
              <MenuItem value={10}>Deposit Transaction</MenuItem>
              <MenuItem value={20}>Withdrawl Transaction</MenuItem>
              <MenuItem value={30}>Withdrawl Request</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={6} md={8}>
            <Box className={classes.inputBoxStyle}>
              <input type="text" placeholder="Search from Transaction" className="searchInput" />
              <span><SearchIcon /></span>
            </Box>
            {/* <TextField 
              className={classes.searchBox} 
              InputProps={{
                startAdornment: <InputAdornment position='start'>
                                  <SearchIcon 
                                    style={{color:"#063892"}}/>
                                </InputAdornment>}}>
            </TextField>         */}
          </Grid>      
        </Grid>       
      </Box>
    </>
  )
}

export default Backgroundbox