import React from 'react';
import { makeStyles } from '@mui/styles';
import {Grid,Box,Typography,Button,TextField,InputAdornment,Pagination,Modal,InputLabel,MenuItem,FormControl,Select,Divider } from '@mui/material';
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
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
      margin: "5px 2px 5px 20px !important",
      boxShadow: "0px 0px 6px #EDEDED7C",
      border: "1px solid #07399219",
      borderRadius: 2,
    },
    tableUser: {
      color: "#063982",
      fontWeight: "bold !important", 
      textAlign: "center", 
      textTransform: "capitalize !important",
      '&:hover': {
        textDecoration:"underline",
        cursor:"pointer",
      }     
    },
    tableOther: {
      color: "white",
      fontSize: "10px",
      padding: "5px 10px",
      borderRadius: "4px",  
      margin:"auto", 
      letterSpacing:"0.2px !important",    
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
      height:"600px",
      overflow:"scroll",
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
      '& table tbody tr td:nth-child(2) svg': {
         verticalAlign:'middle',
         fill: "green",
      },
      '& table tbody tr td:nth-child(3) svg': {
         verticalAlign:'middle',
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
      width: '40vw',
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
        width:"43px !important",
        height:"43px !important",
        fill:'white !important',
    },
    formGrid: {
      margin:"0px 0px 10px 0px !important",
      padding:"0px 20px 10px 20px",
      '& div': {
        padding:0,
      },
    },
    formInput: {
      '& label': {
         fontSize: "16px",
         marginBottom:"8px",
         color:"#011945",
         opacity:0.6,
      },
      
      '& span': {
         color: "#011945 !important",
         fontSize: "15px",
         padding:0,
         fontWeight:"600",
      } ,
    },
    formEdit: {
      '& label': {
         fontSize: "15px",
         marginBottom:"8px",
         color:"#011945",

      },
      '& div div': {
        border:"1px solid #3B3B3B6 !important",
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
       '& span': {
         color: "#61AD61 !important",
         fontSize: "15px",
         padding:0,
         fontWeight:"bold",
         
        },
        '& label': {         
          fontSize: "16px",
          marginBottom:"8px",
          color:"#011945",
          opacity:0.6,
        },    
    },
    userName: {
      '& label': {
        color: "#011945 !important",
        fontWeight:"bold",
        marginBottom:"5px",
      },
      '& span': {
        color: "#011945",
        padding:0,
        opacity:0.6,
        fontSize:"16px",
      }
    },
    formSubhead: {
       padding: "5px 10px 5px 35px",
       fontFamily:"helvetica",
       color: "#011945",
       opacity:0.5,
       fontWeight:"500",
      //  marginTop:"18px !important",
       fontSize:"18px",  
       mx: 2, 
       whiteSpace: 'nowrap',
    },
    divider: {
      display: 'flex', 
      alignItems: 'center',
      margin: "0px 15px 0px 0px",
    },
    formInitialStatus: { 
      borderRadius: '2px',
      '& div input': {
        color: "white",
        padding:"2px 5px",
        
      }
    },
    accountTabs: {
      '& div': {
        justifyContent: "space-around",
        backgroundColor: "white",
      },
      '& div button': {
        textTransform: "capitalize",
        color:"#011945",
        opacity:0.65,
      },
      '& div button:selected': {
        color:"#063892",
      },
    },
    accountTabpanel: {
      padding:"10px 0px !important",
    },
    Status: {
      '& label': {
         fontSize: "16px",
         marginBottom:"8px",
         color:"#011945",
         opacity:0.6,
      },
      '& span': {
        backgroundColor: "#eb8015",
        color: "white",
        borderRadius: "4px",
        padding: "2px 10px",
      }    
    },
    formAmountCleared: {
      display: "flex",
      backgroundColor:"#F6F6F6",
      border:"1px solid #0618380D",
      padding: "5px 12px !important",
      borderRadius:'8px',
      justifyContent:"space-between",
      alignContent:"center",
      '& span span svg': {
        height:'0.7em',
        width:'0.7em',
        marginRight:'4px',
        fill: "#063892",
      },
      '& span': {
        alignSelf: "center",
        alignContent:'center',
        display:'flex',
        color:"#011945",
      },
      '& span:nth-child(2)': {
        color:'#063892',
      }
      
    },
    action: {
      backgroundColor: "#F6F6F6",
      borderRadius: '8px',
      '& input': {
        border: "none",
      },
      '& div' : {
         padding: "2px 12px !important",
         color: "lightslategrey",
      },
      '& div svg': {
         fill: "#171717",
      }
    
    }

  });

const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('1');
  const [action, setAction] = React.useState(10);

  const handleActionChange = (event) => {
    setAction(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                            <Typography variant="span">johnsmith@gmail.com</Typography>
                            {/* <TextField value="johnsmith@gmail.com" variant="standard" disabled/> */}
                         </Grid>
                         <Grid item xs={6} lg={4}  className={classes.formInput}>
                            <InputLabel>Transaction Date</InputLabel>
                            <Typography variant="span">15/01/2025</Typography>
                           
                         </Grid>
                         <Grid item xs={6} lg={4}  className={classes.formInput}>
                            <InputLabel>Transaction Type</InputLabel>
                            <Typography variant="span">Deposit Type</Typography>
                            
                         </Grid>
                         <Grid item xs={6} lg={4} className={classes.formAmount}>
                            <InputLabel>Transaction Amount</InputLabel>
                            <Typography variant="span">123 USD</Typography>
                            
                         </Grid>
                      </Grid>
                      <Box className={classes.divider}>
                         <Typography variant="p" className={classes.formSubhead}>Sender Details</Typography>                       
                         <Divider sx={{ flex: 1 }} />
                      </Box>
                                        
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
                     
                      <Box className={classes.divider}>
                         <Typography variant="p" className={classes.formSubhead}>Matches</Typography>                       
                         <Divider sx={{ flex: 1 }} />
                      </Box>

                      <Grid container spacing={2} className={classes.formGrid}>
                         <Grid item xs={6} lg={4}  className={classes.formInput}>
                            <InputLabel>Bank</InputLabel>
                            <Typography variant="span">Bank of America</Typography>
                           
                         </Grid>
                         <Grid item xs={6} lg={4}  className={classes.formInput}>
                            <InputLabel>Account Number</InputLabel>
                            <Typography variant="span">21324234565676576</Typography>
                           
                         </Grid>
                         <Grid item xs={6} lg={4} className={classes.Status}>
                            <InputLabel>Status</InputLabel>
                            <Typography variant="span">Initialised</Typography>
                         </Grid>
                      </Grid>

                      <Box className={classes.divider}>
                         <Typography variant="p" className={classes.formSubhead}>Action</Typography>                       
                         <Divider sx={{ flex: 1 }} />
                      </Box> 
                      <Grid container spacing={2} className={classes.formGrid}>
                         <Grid item xs={8} lg={8} >
                           <Box className={classes.formAmountCleared}>
                              <Typography variant="span">123456 USD</Typography>
                              <Typography variant="span"><span><CheckCircleOutlineIcon/></span>cleared</Typography>
                           </Box>
                         </Grid>
                         <Grid item xs={8} lg={8} >
                         <FormControl fullWidth className={classes.action}>
                            
                            <Select
                              
                              value={action}
                              name="action"
                              onChange={handleActionChange}
                            >
                              <MenuItem value={10}>Select Action</MenuItem>
                              <MenuItem value={20}>Reject Transaction</MenuItem>
                              <MenuItem value={30}>Confirm Transaction</MenuItem>
                              
                            </Select>
                          </FormControl>
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
        {/* <Box component="div" className={classes.internalLinks}>
           <Box className={classes.linkBtnBox}>
            <Button className={classes.linkBtn}>Exchange Rates</Button>
           </Box>
           <Box className={classes.linkBtnBox}>
            <Button className={classes.linkBtn}>Bank Accounts</Button>
           </Box>
           <Box className={classes.linkBtnBox}>
            <Button className={classes.linkBtn}>Cashbox Accounts</Button>
           </Box>        
        </Box> */}
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box>
                <TabList className={classes.accountTabs} onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Exchange Rates" value="1" />
                  <Tab label="Bank Accounts" value="2" />
                  <Tab label="Cashbox Accounts" value="3" />
                </TabList>
              </Box>
              <TabPanel className={classes.accountTabpanel} value="1">
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
                            <TableCell>{row.sell}<KeyboardArrowDownIcon/></TableCell>
                            <TableCell>{row.buy}<KeyboardArrowUpIcon/></TableCell>
                          
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
              </TabPanel>
              <TabPanel value="2">
                <Box component="div" className={classes.tradeBox}>
                  Item Two
                </Box>           
              </TabPanel>
              <TabPanel value="3">
                <Box component="div" className={classes.tradeBox}>
                  Item Three
                </Box>           
              </TabPanel>
            </TabContext>
        </Box>
        
      </Grid>        
    </Grid>
   </>
  )
}

export default Dashboard