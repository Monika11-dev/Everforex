import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navBtn: {
    color: (props) => props.color + "!important", 
    fontFamily: (props) => props.font,
    textTransform: "capitalize !important",
    marginRight: "10px !important",
    padding: "10px !important",
    borderRadius: "0px !important",
    '& span': {
      marginRight: "2px !important",
    }
  },  
});

const Navmenu = (props) => {
    
  const classes = useStyles(props);
  return (
    <>
      <Button 
        className={classes.navBtn}  
        variant="text" 
        component="a"
        href="#"
        startIcon={props.icon} 
        size="small">{props.text}
      </Button>
    </>
  )
}

export default Navmenu