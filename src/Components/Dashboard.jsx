import React from 'react';
import { makeStyles } from '@mui/styles';
import {Grid,Box,Typography,Button,TextField,InputAdornment,Pagination,Modal,InputLabel,Divider } from '@mui/material';
import Backgroundbox from './Backgroundbox';
import {userList} from '../Database/userData/userList';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { trade } from '../Database/TradeData/trade';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Slide from '@mui/material/Slide';
import CreateIcon from '@mui/icons-material/Create';

const useStyles = makeStyles({
    dashboard: {
      backgroundColor: "#F6F7FC",
      marginTop: "50px !important",
    }, 
    gridPadding: {
      padding: "3px 0px 3px 5px !important",  
    },
    tableBack: {
      backgroundColor: "white !important", 
      padding: "13px 30px !important",
      margin: "5px 20px !important",
      boxShadow: "0px 0px 6px #EDEDED7C",
      border: "1px solid #07399219",
      borderRadius: 2,
    },
    tableUser: {
      color: "#063982",
      fontWeight: "bold !important", 
      textAlign: "center", 
      '&:hover': {
        textDecoration:"underline",
        cursor:"pointer",
      }     
    },
    tableOther: {
      color: "#011945",
      fontSize: "10px",
      padding: "5px 8px",
      borderRadius: "4px",  
      margin:"auto",     
    },
    tableDollar: {
      color: "#011945",
    },
    initialStatusBack: {
      backgroundColor: "#eb8015",
    },
    clearedStatusBack: {
      backgroundColor: "#61ad61",
    },
    internalLinks: {
      display : "flex", 
      backgroundColor: "white", 
      marginBottom: "5px",  
    },
    linkBtnBox: {
      flexGrow: 1,
      textAlign: "center",
    },
    linkBtn: {
      color: "#011945 !important",
      fontSize: 14,
      opacity: 0.6,
      textTransform: "capitalize !important",
      padding: "15px 10px !important",
    },
    searchInput: {
      border: "1px solid #133B8D1A !important",
      backgroundColor: "#FCFCFF89",
      borderRadius:4, 
      '& div input': {
        padding : "5px",
      }
    },
    searchBox: { 
      backgroundColor: "white", 
      marginBottom: "5px",
      padding: "10px 40px",
    },
    tradeBox: {
      backgroundColor:"white",
      marginBottom: "5px",
      padding:"5px 40px",
      '& table thead tr th:first-child': {
        width: "50%",
      },
      '& table thead tr th':{
        padding:"5px",
        color: "#011945",
        opacity: 0.6,
        textTransform: "uppercase",
        fontSize:"small",
      },
      '& table tbody tr th':{
        padding:"16px 5px",
      },
      '& table tbody tr th span': {
        color: "#011945 !important",
        textTransform: "uppercase",
        marginRight:2,
        fontWeight:"bold",
      },
      '& table tbody tr th span:nth-child(2)': {
        color:"#011945 !important",
        opacity:0.6,
      },
      '& table tbody tr th p': {
        color:"#011945 !important",
        opacity:0.6,
        fontSize:12,
        marginTop:5,
      } ,
      '& table tbody tr td' : {
        color: "#011945 !important",
        fontWeight:"bold",
        padding:0,
        
      },
      '& table tbody tr td:nth-child(2) span svg': {
         fill: "green",
      },
      '& table tbody tr td:nth-child(3) span svg': {
         fill: "red",
      },
      // '& table tbody tr td:nth-child(2) span': {
      //   display:"flex",
      //   alignItems:"center",
      //   flexDirection:"row",
      // }
        
    },
    page: {
      margin: "0px 20px",
      '& ul li button': {
        borderRadius: "0px !important",
        backgroundColor: "white",
        color: "grey",
        margin:"0px 1px",
      },
      '& ul li button:disabled': {
        backgroundColor: "white",
        opacity:1,
      },
      '& ul li button:active': {
        border: "1px solid blue",
        backgroundColor:"blue",
      },
      '& ul li button:selected': {
        backgroundColor:"blue",
      }
    },
    modalBox: {
      background: `rgba(0,0,0,0.12)`,
    },
    
    modal: {
      position: 'absolute',
      top: '0',
      right: '0',
      width: '70vw',
      height:'100vh',
      background: "white",    
      border:"none",
      '& div div::before': {
        borderBottom: "none",
        borderBottomStyle: "none !important",
      },
    },
    modalHead: {
      padding:"2px 6px",
      backgroundColor: "#011945",
      color: "white",
      fontSize:20,
      fontFamily:"sans-serif",
      fontWeight:"normal",

    },
    modalCloseBtn: {
        width:"46px !important",
        height:"46px !important",
        fill:'white !important',
    },
    formGrid: {
      margin:"0px 0px 20px 0px !important",
      padding:"10px 20px",
      '& div': {
        padding:0,
      },
    },
    formInput: {
      
      '& div div input': {
         color: "#011945 !important",
         fontSize: "15px",
         padding:0,
      } ,
    },
    formEdit: {
      '& label': {
         fontSize: "15px",
         marginBottom:"8px",
         color:"#011945",

      },
      '& div div': {
        border:"1px solid #3B3B3B6",
        backgroundColor:'#F6F7F7',
        padding: "5px 2px 5px 10px",
      },
      
      '& div div input': {        
         color: "#011945 !important",
         fontSize: "15px",
         padding:0,
      } ,
      '& div div div svg': {
         backgroundColor: "#011945",
         color: "white",
         borderRadius:"4px",
      }
    },
    formAmount: {
       '& div div input': {
         color: "#61AD61 !important",
         fontSize: "15px",
         padding:0,
        }    
    },
    userName: {
      '& label': {
        color: "#011945 !important",
        fontWeight:"bold",
      },
      '& div div input': {
        color: "grey",
        padding:0,
      }
    },
    formSubhead: {
       padding: "10px 10px 10px 35px",
       fontFamily:"helvetica",
       color: "grey",
       fontWeight:"500",
       marginTop:"20px !important",
       fontSize:"18px",
    },
    formInitialStatus: { 
      borderRadius: '2px',
      '& div input': {
        color: "white",
        padding:"2px 5px",
        
      }
    }
    // divider: {
    //   display:'inline-block',
    //   width: "80%",
    // }

  });

const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
   <>
    <Grid container className={classes.dashboard}>
      <Grid className={classes.gridPadding} item xs={12} md={8}>
        <Backgroundbox color='white'>      
        </Backgroundbox>
        {userList.map((item)=>(
          <Box className={classes.tableBack}>
            <Grid container spacing={2}>
              <Grid item xs={4} md={4}>
                <Typography variant="button" onClick={handleOpen}
                  className={classes.tableUser}>
                    {item.username}
                </Typography>   
                <Modal
                    className={classes.modalBox}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition  
                    hideBackdrop                
                >     
                <Slide direction="left" in={open} timeout={600}>          
                    <Box className={classes.modal}>               
                      <Typography className={classes.modalHead} variant="span" component="h2">
                         <Button onClick={handleClose}><CloseIcon className={classes.modalCloseBtn}/></Button>
                         Deposit Transaction Details
                      </Typography>
                      
                      <Grid container spacing={2} className={classes.formGrid}>
                         <Grid item xs={12} md={12} className={classes.userName}>
                            <InputLabel >John Smith</InputLabel>
                            <TextField value="johnsmith@gmail.com" variant="standard" disabled/>
                         </Grid>
                         <Grid item xs={6} lg={4}  className={classes.formInput}>
                            <InputLabel>Transaction Date</InputLabel>
                            <TextField variant="standard" type="date" disabled/>
                         </Grid>
                         <Grid item xs={6} lg={4}  className={classes.formInput}>
                            <InputLabel>Transaction Type</InputLabel>
                            <TextField value="Deposit Type" variant="standard" disabled/>
                         </Grid>
                         <Grid item xs={6} lg={4} className={classes.formAmount}>
                            <InputLabel>Transaction Amount</InputLabel>
                            <TextField   value="123 USD" variant="standard" disabled/>
                         </Grid>
                      </Grid>
                      <Typography variant="p" className={classes.formSubhead}>Sender Details</Typography> 
                      

                      <Grid container spacing={2} className={classes.formGrid}>
                         <Grid item xs={6} md={4} className={classes.formEdit}>
                          <InputLabel >AUD Borrow Rate</InputLabel>
                          <TextField 
                              
                              className={classes.searchBox} 
                              value='0.012'
                              InputProps={{
                                endAdornment: <InputAdornment position='end'>
                                                  <CreateIcon 
                                                    />
                                                </InputAdornment>}}>
                            </TextField>
                         </Grid>
                         <Grid item xs={6} md={8}  className={classes.formEdit}>
                            <InputLabel >AUDUSD sell spread</InputLabel>
                            <TextField 
                                value='0.012'
                                className={classes.searchBox} 
                                InputProps={{
                                  endAdornment: <InputAdornment position='end'>
                                                    <CreateIcon 
                                                      />
                                                  </InputAdornment>}}>
                              </TextField>
                         </Grid>
                         <Grid item xs={6} md={4} className={classes.formEdit}>
                          <InputLabel >AUD Lending Fee</InputLabel>
                          <TextField 
                              
                              className={classes.searchBox} 
                              value='0.0002'
                              InputProps={{
                                endAdornment: <InputAdornment position='end'>
                                                  <CreateIcon 
                                                    />
                                                </InputAdornment>}}>
                            </TextField>
                         </Grid>
                         <Grid item xs={6} md={8}  className={classes.formEdit}>
                            <InputLabel >AUDUSD sell spread</InputLabel>
                            <TextField 
                                value='0.0002'
                                className={classes.searchBox} 
                                InputProps={{
                                  endAdornment: <InputAdornment position='end'>
                                                    <CreateIcon 
                                                      />
                                                  </InputAdornment>}}>
                              </TextField>
                         </Grid>
                         
                      </Grid>

                      <Typography variant="p" className={classes.formSubhead}>Matches</Typography> 

                      <Grid container spacing={2} className={classes.formGrid}>
                         <Grid item xs={6} lg={4}  className={classes.formInput}>
                            <InputLabel>Bank</InputLabel>
                            <TextField variant="standard" value="Bank of America" disabled/>
                         </Grid>
                         <Grid item xs={6} lg={4}  className={classes.formInput}>
                            <InputLabel>Account Number</InputLabel>
                            <TextField variant="standard" value="2121227673543" disabled/>
                         </Grid>
                         <Grid item xs={6} lg={4} >
                            <InputLabel>Status</InputLabel>
                            <TextField className={classes.formInitialStatus + ' ' + classes.initialStatusBack} variant="standard" value="Initialised" disabled/>
                         </Grid>
                      </Grid>
                      
                     
                    </Box>                
                    </Slide> 
                </Modal>               
              </Grid>
              <Grid item xs={4} md={4}>
                {(item.status==="Initialised") ? 
                  <Typography 
                    variant="p" 
                    className={classes.tableOther + ' ' + classes.initialStatusBack}>
                      {item.status}
                  </Typography> : 
                  <Typography 
                    variant="p" 
                    className={classes.tableOther + ' ' + classes.clearedStatusBack}>
                      {item.status}
                  </Typography>
                }      
              </Grid>
              <Grid item xs={4} md={4}>
                <Typography 
                  className={classes.tableDollar}>
                    {item.dollar}
                </Typography>
              </Grid>     
            </Grid>
          </Box> 
        ))}  
        <Pagination count={5} className={classes.page} />
      </Grid>
      <Grid className={classes.gridPadding} item xs={12} md={4}>
        <Box component="div" className={classes.internalLinks}>
           <Box className={classes.linkBtnBox}>
            <Button className={classes.linkBtn}>Exchange Rates</Button>
           </Box>
           <Box className={classes.linkBtnBox}>
            <Button className={classes.linkBtn}>Bank Accounts</Button>
           </Box>
           <Box className={classes.linkBtnBox}>
            <Button className={classes.linkBtn}>Cashbox Accounts</Button>
           </Box>        
        </Box>
        <Box component="div" className={classes.searchBox}>
           <Box className={classes.linkBtnBox}>
              <TextField 
                fullWidth
                className={classes.searchInput}
                variant="outlined"
                InputProps={{
                  startAdornment: <InputAdornment position='start'>
                                    <SearchIcon 
                                      style={{color:"#063892"}}/>
                                  </InputAdornment>}}>
              </TextField>   
           </Box>       
        </Box>
        <Box component="div" className={classes.tradeBox}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Currency</TableCell>
                <TableCell >Sell</TableCell>
                <TableCell >Buy</TableCell>        
              </TableRow>
            </TableHead>
            <TableBody>
              {trade.map((row) => (
                <TableRow
                  key={row.key}
                >
                  <TableCell component="th" scope="row">
                    <Typography variant="span">{row.currency1}</Typography>
                    <Typography variant="span">/</Typography>
                    <Typography variant="span">{row.currency2}</Typography>
                    <Typography>{row.detail}</Typography>
                  </TableCell>
                  <TableCell>{row.sell}<span><KeyboardArrowDownIcon/></span></TableCell>
                  <TableCell>{row.buy}<span><KeyboardArrowUpIcon/></span></TableCell>
                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Grid>        
    </Grid>
   </>
  )
}

export default Dashboard