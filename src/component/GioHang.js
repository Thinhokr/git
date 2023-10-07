import React, {useState} from 'react';
import {
  Typography,
  Button,
  Grid,
  Avatar,
  Box,
  RadioGroup,
  Select,
  MenuItem,
  Accordion, AccordionSummary, AccordionDetails, Paper, Card, CardContent
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import PaymentIcon from '@mui/icons-material/Payment';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import SanPham from "../SanPham"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';


function App() {
  const [quantity, setQuantity] = useState(1);

  const handleAddClick = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveClick = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
      <div >
        <Grid container
              direction="row"
              justifyContent="space-around"
              alignItems="stretch" spacing={0.5}>
          <Grid item xs={8} style={{marginTop:"100px"}}>

              <Typography variant={'h5'}>
                Your Items
              </Typography>
              <Divider />

              <Grid container>
                <Grid item={3} sx={{
                  padding:3,
                }}>
                  <img style={{
                    width:'200px',
                    height:'200px'
                  }} src={'//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-1+u-k4hzwxcwwwitd0dv7frx+v-fnakni6tfbys3tvvdgsr.png?_hv=2&w=900'} />
                </Grid>
                <Grid item={6} sx={{
                  padding:3,
                }}>
                  <Typography>
                    Maillot PSG Nike Domicile Stadium 23/24
                  </Typography>
                  <Typography sx={{
                    paddingTop:2,
                    paddingBottom:2,
                  }}>
                               <span style={{
                                 fontSize:15,
                                 fontWeight:'bold',
                                 opacity: 0.7,
                               }}> Font:</span>
                    <span  style={{
                      fontSize:13,
                      fontWeight:'bold',
                      opacity: 0.7,
                    }}>
                                     League Printing
                                </span>


                  </Typography>
                  <Typography sx={{
                    paddingBottom:2,
                  }}>
                               <span style={{
                                 fontSize:15,
fontWeight:'bold',
                                 opacity: 0.7,
                               }}>  Nom:</span>
                    <span  style={{
                      fontSize:13,
                      fontWeight:'bold',
                      opacity: 0.7,
                    }}>
                                     BARCOLA
                                </span>


                  </Typography>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                        variant="contained"
                        style={{
                          backgroundColor: 'white',
                          minWidth: 'auto', // Đặt kích thước tối thiểu
                          boxShadow: 'none', // Loại bỏ boxShadow
                        }}
                    >
                      <IconButton
                          color="inherit"
                          aria-label="Add"
                          style={{ color: 'black' }}
                          onClick={handleRemoveClick}
                      >
                        <RemoveIcon />
                      </IconButton>
                    </Button>

                    <Typography style={{ margin: '0 10px' }}>{quantity}</Typography>

                    <Button
                        variant="contained"
                        style={{
                          backgroundColor: 'white',
                          minWidth: 'auto', // Đặt kích thước tối thiểu
                          boxShadow: 'none', // Loại bỏ boxShadow
                        }}
                    >
                      <IconButton
                          color="inherit"
                          aria-label="Remove"
                          style={{ color: 'black' }}
                          onClick={handleAddClick}
                      >
                        <AddIcon />
                      </IconButton>
                    </Button>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-helper-label">SIZE</InputLabel>
                      <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="Quantité"
                      >
                        <MenuItem value={'X'}></MenuItem>
                        <MenuItem value={'X'}>S</MenuItem>
                        <MenuItem value={'M'}>M</MenuItem>
                        <MenuItem value={'L'}>L</MenuItem>
                        <MenuItem value={'XL'}>XL</MenuItem>
                        <MenuItem value={'2XL'}>2XL</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <Typography sx={{
                    fontSize:'.75rem',
                    color: '#247e0c',
                    paddingTop:2,
                    paddingBottom:2,
}}>
                    This item usually ships within one business day. Please allow 14 business<br/> days for despatch  of items with player or custom name and number printing.
                  </Typography>
                </Grid>
                <Grid item={3}>
                  <Typography variant={'h5'} sx={{
                    paddingLeft:25,
                    paddingTop:3,

                  }}>
                    450$
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              <Grid container>
                <Grid item={3} sx={{
                  padding:3,
                }}>
                  <img style={{
                    width:'200px',
                    height:'200px'
                  }} src={'//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-1+u-k4hzwxcwwwitd0dv7frx+v-fnakni6tfbys3tvvdgsr.png?_hv=2&w=900'} />
                </Grid>
                <Grid item={6} sx={{
                  padding:3,
                }}>
                  <Typography>
                    Maillot PSG Nike Domicile Stadium 23/24
                  </Typography>
                  <Typography sx={{
                    paddingTop:2,
                    paddingBottom:2,
                  }}>
                               <span style={{
                                 fontSize:15,
                                 fontWeight:'bold',
                                 opacity: 0.7,
                               }}> Font:</span>
                    <span  style={{
                      fontSize:13,
                      fontWeight:'bold',
                      opacity: 0.7,
                    }}>
                                     League Printing
                                </span>


                  </Typography>
                  <Typography sx={{
                    paddingBottom:2,
                  }}>
                               <span style={{
                                 fontSize:15,
                                 fontWeight:'bold',
                                 opacity: 0.7,
                               }}>  Nom:</span>
                    <span  style={{
                      fontSize:13,
                      fontWeight:'bold',
                      opacity: 0.7,
                    }}>
                                     BARCOLA
                                </span>


                  </Typography>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                        variant="contained"
                        style={{
                          backgroundColor: 'white',
                          minWidth: 'auto', // Đặt kích thước tối thiểu
                          boxShadow: 'none', // Loại bỏ boxShadow
                        }}
                    >
                      <IconButton
color="inherit"
                          aria-label="Add"
                          style={{ color: 'black' }}
                          onClick={handleRemoveClick}
                      >
                        <RemoveIcon />
                      </IconButton>
                    </Button>

                    <Typography style={{ margin: '0 10px' }}>{quantity}</Typography>

                    <Button
                        variant="contained"
                        style={{
                          backgroundColor: 'white',
                          minWidth: 'auto', // Đặt kích thước tối thiểu
                          boxShadow: 'none', // Loại bỏ boxShadow
                        }}
                    >
                      <IconButton
                          color="inherit"
                          aria-label="Remove"
                          style={{ color: 'black' }}
                          onClick={handleAddClick}
                      >
                        <AddIcon />
                      </IconButton>
                    </Button>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-helper-label">SIZE</InputLabel>
                      <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="Quantité"
                      >
                        <MenuItem value={'X'}></MenuItem>
                        <MenuItem value={'X'}>S</MenuItem>
                        <MenuItem value={'M'}>M</MenuItem>
                        <MenuItem value={'L'}>L</MenuItem>
                        <MenuItem value={'XL'}>XL</MenuItem>
                        <MenuItem value={'2XL'}>2XL</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <Typography sx={{
                    fontSize:'.75rem',
                    color: '#247e0c',
                    paddingTop:2,
                    paddingBottom:2,
                  }}>
                    This item usually ships within one business day. Please allow 14 business<br/> days for despatch  of items with player or custom name and number printing.
                  </Typography>
                </Grid>
                <Grid item={3}>
                  <Typography variant={'h5'} sx={{
                    paddingLeft:25,
                    paddingTop:3,

                  }}>
                    450$
                  </Typography>
                </Grid>
              </Grid>
          </Grid>
            {/*</CustomTabPanel>*/}
          <Grid item xs={4} style={{marginTop:"130px"}}>
              <Box style={{ border: '.0625rem solid #d5d5d5' ,
                marginLeft:50,
                marginRight:50,
                marginBottom:350,


              }}>
                <Accordion>
<AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography>
                      Avez-vous un code promo?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        size="small" // Sử dụng size="small" để làm cho TextField nhỏ hơn
                        style={{ width: '200px' }} // Điều chỉnh chiều rộng nếu cần
                    />
                    <Button className="button"  type="submit"
                            sx={{
                              backgroundColor:'#242424',
                              color:'white',
                              '&:hover': {
                                backgroundColor: 'black',
                              },
                              marginLeft:5

                            }}
                    >ADD</Button>
                  </AccordionDetails>
                </Accordion>

                <Box sx={{
                  backgroundColor: '#f5f6f8',
                  width: '100%', // Đặt width thành 100% để rộng ra
                  height:'100%' //
                }}>
                  <Typography sx={{
                    padding: 4,
                    color:'black'
                  }}>
                    Cart Total:<span style={{ marginLeft: 200 }}>900$</span>
                  </Typography>
                </Box>
                <Box>

                </Box>
                <Button
                    variant="contained"

                    startIcon={<LockIcon />}
                    sx={{
                      backgroundColor:'#242424',
                      '&:hover': {
                        backgroundColor: 'black',
                      },
                      marginTop:3,
                      width:'80%',
                      marginLeft:5,
                      fontSize:'13px',
                      height:'40px',
                    }}
                >
                  Checkout
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PaymentIcon />}
                    className="paypal-button"
                    sx={{
                      marginTop:3,
                      width:'80%',
                      fontSize:'13px',
                      height:'40px',
                      marginLeft:'40px',
                      marginBottom:'20px',
                    }}
                >
                  Checkout with PayPal
                </Button>
              </Box>

          </Grid>
        </Grid>
        <Divider />
        <div className={'colCuon'}>
         <SanPham/>

        </div>
      </div>


  )
}


export default App;