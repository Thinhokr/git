import {
  Accordion,
  AccordionDetails, AccordionSummary,
  Box, Button,
  Divider,
  Fade, FormControl,
  FormControlLabel,
  Grid,
  InputLabel, ListSubheader, MenuItem,
  Paper, Select,
  Switch,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from 'react';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function App() {

  const [direction, setDirection] = React.useState('up');
  const [hidden, setHidden] = React.useState(false);

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(!event.target.checked);
  };

  return (
      <div className={"container"}>

        <Grid   container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={4}
                sx={{
                  marginTop: '50px',
                }}
        >
          <Grid item xs={1}>
          </Grid>

          <Grid item xs={6}>
            <Divider />

            {/*<Box sx={{*/}
            {/*    height: 180,*/}
            {/*}}*/}
            {/*     ariaLabel="SpeedDial playground example"*/}
            {/*     hidden={hidden}*/}
            {/*>*/}

            <Typography variant={'h4'} style={{marginTop:'15px'}}>
              Thông Tin Khách Hàng
            </Typography>
            <Box
                sx={{
                  maxWidth: '100%',
                  marginTop: '30px',

                }}
            >
              <Box className={"thongTinKhachHang"} style={{marginLeft:"20px"}}>
                <Typography variant={'body1'} style={{ marginTop: '15px', fontWeight: 'bold',fontSize:'16px'}}>
                  Trần Văn Thịnh
                </Typography>
                <Typography variant={'body1'} style={{ marginTop: '10px' ,fontSize:'14px'}}>
                  0965670192
                </Typography>
                <Typography variant={'body1'} style={{ marginTop: '10px' ,fontSize:'14px'}}>
                  Cẩm bào,Xã Cẩm yên,Huyện Thạch Thất, Hà Nội
                </Typography>
                <div className={"buttonDiaChi"} style={{ marginTop: '20px' }}>
                  <Button variant="outlined" style={{ marginRight: '20px',borderColor: 'teal', color: 'teal' }}>Chọn Địa Chỉ</Button>
                  <Button variant="outlined" style={{borderColor: 'red', color: 'red' }}>Thêm Mới</Button>
                </div>

              </Box>

              <Box style={{margin:7,marginTop:'80px'}}>
                <Typography variant={'h6'} sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold',margin:2}}>
                  <LocalShippingIcon sx={{ marginRight: '8px' }} /> Thời Gian Giao Hàng Dự Kiến 24/09/2023
                </Typography>
<Typography variant={'h6'} sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold',margin:2 }}>
                  <LocalShippingIcon sx={{ marginRight: '8px' }} /> Đơn Vị Vận Chuyển: <span style={{color:'blue'}}>Giao Hàng Nhanh</span>
                </Typography>

              </Box>


            </Box>

            {/*</Box>*/}
          </Grid>
          <Grid item xs={4}>

            <Box style={{ border: '.0625rem solid #d5d5d5' ,
            }}>
              <Typography variant={'h4'} style={{marginTop:'15px', marginLeft:'20px'}}>
                <PaymentIcon /> Thanh Toán
              </Typography>

              <Box sx={{
                backgroundColor: '#f5f6f8',
                width: '100%', // Đặt width thành 100% để rộng ra
                height:'100%' //
              }}>

                {/*<FormControlLabel style={{marginLeft:'20px'}} control={<Switch checked={!hidden} onChange={handleHiddenChange} color="primary" />}*/}
                {/*                    label="Giao Hàng"*/}
                {/*                />*/}

                <Typography sx={{
                  padding: 1,
                  color: 'black',
                  alignItems: 'flex-start',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  Mã Giảm Giá:<Button variant="outlined" style={{ marginLeft: '70px', borderColor: 'teal', color: 'teal' }}>Chọn Mã Giảm Giá</Button>
                </Typography>
                <Typography sx={{
                  padding: 1,
                  color: 'black',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <span>Tiền Hàng:</span>
                  <span>900.000 đ</span>
                </Typography>
                <Typography sx={{
                  padding: 1,
                  color: 'black',
                  alignItems: 'flex-start',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <span>Phí vận Chuyển:</span>
                  <span>50.000 đ</span>
                </Typography>
                <Typography sx={{
                  padding: 1,
                  color: 'black',
                  alignItems: 'flex-start',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <span>Giảm Giá:</span>
                  <span>50.000 đ</span>
                </Typography>


                <Typography variant={'h6'} sx={{
                  padding: 2,
                  color:'red'

                }}>
                  Tổng Số Tiền: <span style={{marginLeft:'90px'}}>950.000 đ</span>
                  <Button
                      variant="contained"


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
                    Đặt Hàng
                  </Button>
                </Typography>
              </Box>
              <Box>
                <Typography style={{marginTop:'20px',marginLeft:'20px'}}>
                  Sản Phẩm
                </Typography>

                <Box style={{marginTop:'15px',marginBottom:'15px'}}>
                  <Divider/>
                  <Grid container style={{marginTop:'20px'}}>
                    <Grid item xs={4}>
                      <img style={{
                        width:'100px',
                        height:'100px'
                      }} src={'//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-' +
                          'stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-1+u-k4hzwxcwwwitd0dv7frx+' +
                          'v-fnakni6tfbys3tvvdgsr.png?_hv=2&w=900'} />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant={'body1'} >
                        Paris Saint-Germain x Jordan Third Stadium Shirt 2023-24 - Womens
                      </Typography>
                      <Typography style={{marginTop:'10px'}} variant={'body1'}>
                        Tên: Tran Van Thinh
                      </Typography>
                      <Typography style={{marginTop:'10px'}} variant={'body1'}>
                        Số áo: 9
                      </Typography>
                      <Typography style={{marginTop:'10px'}} variant={'body1'}>
                        Giá : 100.000 đ
                      </Typography>

                      <Typography style={{marginTop:'10px',fontSize:'13px'}} variant={'body1'}>
                        <span style={{ fontWeight: 'bold'}}>Size: XL</span>   <span style={{ fontWeight: 'bold',marginLeft:'22px' }}>Số Lượng: 1</span>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Box style={{marginTop:'15px',marginBottom:'15px'}}>
                  <Divider/>
                  <Grid container style={{marginTop:'20px'}}>
                    <Grid item xs={4}>
                      <img style={{
                        width:'100px',
                        height:'100px'
                      }} src={'//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-' +
                          'stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-1+u-k4hzwxcwwwitd0dv7frx+' +
                          'v-fnakni6tfbys3tvvdgsr.png?_hv=2&w=900'} />
                    </Grid>
                    <Grid item xs={8}>
<Typography variant={'body1'} >
                        Paris Saint-Germain x Jordan Third Stadium Shirt 2023-24 - Womens
                      </Typography>
                      <Typography style={{marginTop:'10px'}} variant={'body1'}>
                        Tên: Tran Van Thinh
                      </Typography>
                      <Typography style={{marginTop:'10px'}} variant={'body1'}>
                        Số áo: 9
                      </Typography>
                      <Typography style={{marginTop:'10px'}} variant={'body1'}>
                        Giá : 100.000 đ
                      </Typography>

                      <Typography style={{marginTop:'10px',fontSize:'13px'}} variant={'body1'}>
                        <span style={{ fontWeight: 'bold'}}>Size: XL</span>   <span style={{ fontWeight: 'bold',marginLeft:'22px' }}>Số Lượng: 1</span>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Box style={{marginTop:'15px',marginBottom:'15px'}}>
                  <Divider/>
                  <Grid container style={{marginTop:'20px'}}>
                    <Grid item xs={4}>
                      <img style={{
                        width:'100px',
                        height:'100px'
                      }} src={'//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-' +
                          'stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-1+u-k4hzwxcwwwitd0dv7frx+' +
                          'v-fnakni6tfbys3tvvdgsr.png?_hv=2&w=900'} />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant={'body1'} >
                        Paris Saint-Germain x Jordan Third Stadium Shirt 2023-24 - Womens
                      </Typography>
                      <Typography style={{marginTop:'10px'}} variant={'body1'}>
                        Tên: Tran Van Thinh
                      </Typography>
                      <Typography style={{marginTop:'10px'}} variant={'body1'}>
                        Số áo: 9
                      </Typography>
                      <Typography style={{marginTop:'10px'}} variant={'body1'}>
                        Giá : 100.000 đ
                      </Typography>

                      <Typography style={{marginTop:'10px',fontSize:'13px'}} variant={'body1'}>
                        <span style={{ fontWeight: 'bold'}}>Size: XL</span>   <span style={{ fontWeight: 'bold',marginLeft:'22px' }}>Số Lượng: 1</span>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

              </Box>

            </Box>

          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>
      </div>
  );
}

export default App;


//
//
//
//
//
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import TextField from '@mui/material/TextField';
//
// const StyledTextField = styled(TextField)({
//     marginBottom: '16px', // Thêm khoảng cách giữa TextField và Switch
// });
//
// export default function PlaygroundSpeedDial() {
//     const [hidden, setHidden] = React.useState(true); // Ban đầu là ẩn
//
//     const handleHiddenChange = (event) => {
//         setHidden(!event.target.checked); // Đảo ngược giá trị hidden
//     };
//
//     return (
//         <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
//             <FormControlLabel
//                 control={
//                     <Switch checked={!hidden} onChange={handleHiddenChange} color="primary" />
//                 }
//                 label="Hidden"
//             />
//             {hidden ? null : (
//                 <StyledTextField
//                     label="Text"
//                     variant="outlined"
//                     fullWidth
//                 />
//             )}
//         </Box>
//     );
// }
//