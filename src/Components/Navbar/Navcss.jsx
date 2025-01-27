import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    nav: {
        flexGrow: 1, 
        color: "#063892", 
        textDecoration: "none",  
    },
    navBack: {
        backgroundColor: "white !important",
        border: "1px solid #70707021",
        height: 50,
        justifyContent: "center",
        boxShadow: "none !important",  
        '& div:nth-child(2)': {
            top: "5px",
        }     
    },
    profileIcon: {
        color: "#063892",
    },
    iconBack: {
      backgroundColor: "#E7ECF5!important", 
      borderRadius: "20% !important",
    },
    profileList: {
      '& ul ': {
        padding:0,
      },
     '& ul li a': {
        fontSize: "14px",
     }
    }
});