// import {
//     Box,
//     Button,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogContentText,
//     DialogTitle,
//     Divider,
//     FormControl,
//     FormControlLabel,
//     Grid,
//     InputLabel,
//     ListSubheader,
//     MenuItem,
//     Paper,
//     Select,
//     Switch,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     TextField,
//     Typography,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import IconButton from "@mui/material/IconButton";
// import React, {useState} from "react";
// import PaymentIcon from "@mui/icons-material/Payment";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import CloseIcon from "@mui/icons-material/Close";
//
// function App() {
//
//     const [value, setValue] = React.useState(1);
//     const [tabs, setTabs] = React.useState([{title: "Tab 1", content: []}]); // Danh sách các tab
//
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//
//     const handleButtonClick = () => {
//         const newTab = tabs.length; // Tạo một tab mới với giá trị tăng dần
//         setTabs([...tabs, {title: `Tab ${newTab + 1}`, content: []}]); // Thêm tab mới vào danh sách tab
//         setValue(newTab); // Đặt giá trị của tab mới là tab hiện tại
//     };
//
//     const addTableRowToTab = (tabIndex, rowContent) => {
//         const updatedTabs = [...tabs];
//         updatedTabs[tabIndex].content.push(rowContent);
//         setTabs(updatedTabs);
//     };
//
//     const removeTab = (tabIndex) => {
//         const updatedTabs = tabs.filter((_, index) => index !== tabIndex);
//         setTabs(updatedTabs);
//         if (tabIndex === value && updatedTabs.length > 0) {
//             // Nếu tab được xóa là tab đang được chọn và còn các tab khác, chuyển đổi sang tab cuối cùng.
//             setValue(updatedTabs.length - 1);
//         }
//     };
//
//     const [open, setOpen] = useState(false);
//     const handleClickOpen = () => {
//         setOpen(true);
//     };
//
//     const handleClose = () => {
//         setOpen(false);
//     };
//
//     const [quantity, setQuantity] = useState(1);
//
//     const handleAddClick = () => {
//         setQuantity(quantity + 1);
//     };
//
//     const handleRemoveClick = () => {
//         if (quantity > 0) {
//             setQuantity(quantity - 1);
//         }
//     };
//     const [direction, setDirection] = React.useState("up");
//     const [hidden, setHidden] = React.useState(false);
//
//     const handleDirectionChange = (event) => {
//         setDirection(event.target.value);
//     };
//
//     const handleHiddenChange = (event) => {
//         setHidden(!event.target.checked);
//     };
//
//     function createData(anh, ten, soLuong, soTien, donGia, size) {
//         return {anh, ten, soLuong, soTien, donGia, size};
//     }
//
//     const rows = [createData("//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-" + "stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-1+u-k4hzwxcwwwitd0dv7frx+" + "v-fnakni6tfbys3tvvdgsr.png?_hv=2&w=900", "MPB", 3, 100.0, 300.0, "XL"), createData("//images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-" + "stadium-shirt-2023-24-with-gramos-9-printing_ss5_p-200479084+pv-1+u-k4hzwxcwwwitd0dv7frx+" + "v-fnakni6tfbys3tvvdgsr.png?_hv=2&w=900", "MPB", 3, 100.0, 300.0, "X"),];
//
//     return (<Grid
//             container
//             direction="row"
//             justifyContent="center"
//             alignItems="stretch"
//             spacing={4}
//             sx={{
//                 marginTop: "20px",
//             }}
//         >
//             <Grid item xs={1}></Grid>
//             <Grid item xs={10}>
//                 <Box
//                     display="flex"
//                     justifyContent="space-between"
//                     style={{marginTop: "10px", marginBottom: "10px"}}
//                 >
//                     <Grid container direction="row" alignItems="stretch">
//                         <Grid xs={4}>
//                             {/*<Button>Hóa Đơn 1</Button>*/}
//                             {/*tab */}
//
//                             <Tabs
//                                 value={value}
//                                 onChange={handleChange}
//                                 variant="scrollable"
//                                 scrollButtons="auto"
//                                 aria-label="scrollable auto tabs example"
//                             >
//                                 {tabs.map((tab, index) => (<Tab
//                                         key={index}
//                                         label={<Typography style={{display: "flex", alignItems: "center"}}>
//                                             {tab.title}
//                                         </Typography>}
//                                     />))}
//                             </Tabs>
//                         </Grid>
//                         <Grid xs={5}></Grid>
//                         <Grid xs={3} style={{marginTop: '30px'}}>
//                             <Button
//                                 variant="contained"
//                                 onClick={handleButtonClick}
//                             >
//                                 Tạo Hóa Đơn
//                             </Button>
//                             <Button variant="contained" onClick={handleClickOpen} style={{marginLeft: '20px'}}>
//                                 Thêm Sản Phẩm
//                             </Button>
//                         </Grid>
//                     </Grid>
//
//
//                     {/*// dialog theem san pham*/}
//                     <Dialog fullWidth maxWidth={'xl'} open={open} onClose={handleClose}>
//                         <DialogContent>
//                             <TableContainer component={Paper}>
//                                 <Table style={{borderCollapse: 'collapse'}}>
//                                     <TableHead>
//                                         <TableRow>
//                                             <TableCell>Ảnh</TableCell>
//                                             <TableCell>Sản Phẩm</TableCell>
//                                             <TableCell style={{marginLeft: '50px'}}>Số Lượng</TableCell>
//
//                                             <TableCell>Giá Tiền</TableCell>
//                                             <TableCell>Đơn Giá</TableCell>
//                                             <TableCell>Thao Tác</TableCell>
//                                         </TableRow>
//                                     </TableHead>
//                                     <TableBody>
//                                         {rows.map((row) => (<TableRow
//                                                 key={row.stt}
//                                                 sx={{
//                                                     "&:last-child td, &:last-child th": {border: 0},
//                                                 }}
//                                             >
//                                                 <TableCell>
//                                                     <img
//                                                         style={{
//                                                             width: "100px", height: "100px",
//                                                         }}
//                                                         src={row.anh}
//                                                     />
//                                                 </TableCell>
//                                                 <TableCell>
//                                                     Tên Sản Phẩm:{row.ten} <br/>
//                                                     <br/>
//                                                     Size: {row.size}
//                                                 </TableCell>
//
//                                                 <TableCell>
//                                                     <Box style={{display: "flex"}}>
//                                                         <Button>
//                                                             <IconButton
//                                                                 color="inherit"
//                                                                 aria-label="Remove"
//                                                                 style={{color: 'black'}}
//                                                                 onClick={handleRemoveClick}
//                                                             >
//                                                                 <RemoveIcon/>
//                                                             </IconButton>
//                                                         </Button>
//                                                         <Typography style={{paddingTop: '13px'}}>
//                                                             {quantity}
//                                                         </Typography>
//                                                         <Button
//
//                                                         >
//                                                             <IconButton
//                                                                 color="inherit"
//                                                                 aria-label="Remove"
//                                                                 style={{color: 'black'}}
//                                                                 onClick={handleAddClick}
//                                                             >
//                                                                 <AddIcon/>
//                                                             </IconButton>
//                                                         </Button>
//                                                     </Box>
//
//                                                 </TableCell>
//
//
//                                                 <TableCell>{row.soTien}</TableCell>
//                                                 <TableCell>{row.donGia}</TableCell>
//
//                                                 <TableCell>
//                                                     <Box>
//                                                         <React.Fragment>
//                                                             <Button variant="contained">ADD</Button>
//                                                             <Dialog>
//                                                                 <DialogTitle>Optional sizes</DialogTitle>
//                                                                 <DialogContent>
//                                                                     <DialogContentText>
//                                                                         You can set my maximum width and whether to
//                                                                         adapt or not.
//                                                                     </DialogContentText>
//                                                                     <Box
//                                                                         noValidate
//                                                                         component="form"
//                                                                         sx={{
//                                                                             display: "flex",
//                                                                             flexDirection: "column",
//                                                                             m: "auto",
//                                                                             width: "fit-content",
//                                                                         }}
//                                                                     ></Box>
//                                                                 </DialogContent>
//                                                                 <DialogActions>
//                                                                     <Button>Close</Button>
//                                                                 </DialogActions>
//                                                             </Dialog>
//                                                         </React.Fragment>
//                                                     </Box>
//                                                 </TableCell>
//                                             </TableRow>))}
//                                     </TableBody>
//                                 </Table>
//                             </TableContainer>
//                         </DialogContent>
//                         <DialogActions>
//                             <Button onClick={handleClose}>Close</Button>
//                         </DialogActions>
//                     </Dialog>
//                 </Box>
//                 {/*table*/}
//
//                 {/*//// trong tab*/}
//                 <Box
//                     className="css">
//                     <Box>
//                         {tabs.map((tab, index) => (
//                             <Box key={index} style={{display: value === index ? 'block' : 'none'}}>
//                                 <Box
//                                     className="css-header"
//                                     sx={{borderBottom: 1, borderColor: "divider"}}
//                                 >
//                                     <Typography variant={'h4'}>Giỏ Hàng</Typography>
//                                 </Box>
//                                 <Box>
//                                     <TableContainer component={Paper}>
//                                         <Table style={{borderCollapse: 'collapse'}}>
//                                             <TableHead>
//                                                 <TableRow>
//                                                     <TableCell>Ảnh</TableCell>
//                                                     <TableCell>Sản Phẩm</TableCell>
//                                                     <TableCell align={"center"}>Số Lượng</TableCell>
//                                                     <TableCell>Giá Tiền</TableCell>
//                                                     <TableCell>Đơn Giá</TableCell>
//                                                     <TableCell>Thao Tác</TableCell>
//                                                 </TableRow>
//                                             </TableHead>
//                                             <TableBody>
//                                                 {rows.map((row) => (<TableRow
//                                                         key={row.stt}
//                                                         sx={{
//                                                             "&:last-child td, &:last-child th": {border: 0},
//                                                         }}
//                                                     >
//                                                         <TableCell>
//                                                             <img
//                                                                 style={{
//                                                                     width: "100px", height: "100px",
//                                                                 }}
//                                                                 src={row.anh}
//                                                             />
//                                                         </TableCell>
//                                                         <TableCell>
//                                                             Tên Sản Phẩm:{row.ten} <br/>
//                                                             <br/>
//                                                             Size: {row.size}
//                                                         </TableCell>
//
//                                                         <TableCell>
//                                                             <Box style={{display: "flex", marginLeft: '109px'}}>
//                                                                 <Button>
//                                                                     <IconButton
//                                                                         color="inherit"
//                                                                         aria-label="Remove"
//                                                                         style={{color: 'black'}}
//                                                                         onClick={handleRemoveClick}
//                                                                     >
//                                                                         <RemoveIcon/>
//                                                                     </IconButton>
//                                                                 </Button>
//                                                                 <Typography style={{paddingTop: '13px'}}>
//                                                                     {quantity}
//                                                                 </Typography>
//                                                                 <Button
//
//                                                                 >
//                                                                     <IconButton
//                                                                         color="inherit"
//                                                                         aria-label="Remove"
//                                                                         style={{color: 'black'}}
//                                                                         onClick={handleAddClick}
//                                                                     >
//                                                                         <AddIcon/>
//                                                                     </IconButton>
//                                                                 </Button>
//                                                             </Box>
//
//                                                         </TableCell>
//
//
//                                                         <TableCell>{row.soTien}</TableCell>
//                                                         <TableCell>{row.donGia}</TableCell>
//
//                                                         <TableCell>
//                                                             <Box>
//                                                                 <React.Fragment>
//                                                                     <Button variant="contained">Delete</Button>
//                                                                     <Dialog>
//                                                                         <DialogTitle>Optional sizes</DialogTitle>
//                                                                         <DialogContent>
//                                                                             <DialogContentText>
//                                                                                 You can set my maximum width and whether
//                                                                                 to
//                                                                                 adapt or not.
//                                                                             </DialogContentText>
//                                                                             <Box
//                                                                                 noValidate
//                                                                                 component="form"
//                                                                                 sx={{
//                                                                                     display: "flex",
//                                                                                     flexDirection: "column",
//                                                                                     m: "auto",
//                                                                                     width: "fit-content",
//                                                                                 }}
//                                                                             ></Box>
//                                                                         </DialogContent>
//                                                                         <DialogActions>
//                                                                             <Button>Close</Button>
//                                                                         </DialogActions>
//                                                                     </Dialog>
//                                                                 </React.Fragment>
//                                                             </Box>
//                                                         </TableCell>
//                                                     </TableRow>))}
//                                             </TableBody>
//                                         </Table>
//                                     </TableContainer>
//
//
//                                     {/*ghghghghgh*/}
//
//                                 </Box>
//                                 <Grid
//                                     container
//                                     direction="row"
//                                     justifyContent="center"
//                                     alignItems="stretch"
//                                     spacing={0.5}
//                                     sx={{
//                                         marginTop: "60px",
//                                     }}
//                                 >
//
//                                     <Grid
//                                         item
//                                         xs={12}
//                                         style={{
//                                             border: ".0625rem solid #d5d5d5",
//                                             borderColor: "divider",
//                                             boxShadow: "0 0 0.7px gray",
//                                         }}
//                                     >
//                                         <Box
//                                             display="flex"
//                                             justifyContent="space-between"
//                                             style={{marginTop: "10px", marginBottom: "10px"}}
//                                         >
//                                             <Typography variant={"h6"} style={{paddingLeft: "10px"}}>
//                                                 Tài Khoản
//                                             </Typography>
//                                             <Button variant="contained" style={{marginRight: "10px"}}>
//                                                 Chon Tài Khoản
//                                             </Button>
//                                         </Box>
//                                         <Divider/>
//                                         <Box style={{
//                                             display: "flex",
//                                             alignItems: "center",
//                                             marginTop: "20px",
//                                             marginBottom: "20px"
//                                         }}>
//                                             <Typography style={{marginRight: "20px"}}>Tên Tài Khoản:</Typography>
//                                             <Typography>Khách Lẻ</Typography>
//                                         </Box>
//
//                                     </Grid>
//                                 </Grid>
//
//
//                                 {/*thanh toan*/}
//                                 <Grid
//                                     container
//                                     direction="row"
//                                     justifyContent="center"
//                                     alignItems="stretch"
//                                     spacing={4}
//                                     sx={{
//                                         marginTop: "40px",
//                                     }}
//                                 >
//
//                                     <Grid item xs={7}>
//                                         <Divider/>
//
//                                         <Box
//                                             sx={{
//                                                 height: 180,
//                                             }}
//                                             ariaLabel="SpeedDial playground example"
//                                             hidden={hidden}
//                                         >
//                                             <Typography variant={"h4"} style={{marginTop: "15px"}}>
//                                                 Thông Tin Khách Hàng
//                                             </Typography>
//                                             <Box
//                                                 sx={{
//                                                     maxWidth: "100%", marginTop: "30px",
//                                                 }}
//                                             >
//                                                 <TextField fullWidth label="Họ Tên" sx={{margin: 1}}/>
//                                                 <TextField fullWidth label="Email" sx={{margin: 1}}/>
//                                                 <TextField fullWidth label="Số Điện Thoại" sx={{margin: 1}}/>
//                                                 <Grid
//                                                     container
//                                                     direction="row"
//                                                     justifyContent="center"
//                                                     alignItems="stretch"
//                                                     spacing={4}
//                                                 >
//                                                     <Grid item xs={4}>
//                                                         <FormControl sx={{m: 1}} fullWidth>
//                                                             <InputLabel htmlFor="grouped-native-select">
//                                                                 Tỉnh/Thành Phố
//                                                             </InputLabel>
//                                                             <Select
//                                                                 native
//                                                                 defaultValue=""
//                                                                 id="grouped-native-select"
//                                                                 label="Grouping"
//                                                             >
//                                                                 <option aria-label="None" value=""/>
//                                                                 <optgroup label="Category 1">
//                                                                     <option value={1}>Option 1</option>
//                                                                     <option value={2}>Option 2</option>
//                                                                 </optgroup>
//                                                                 <optgroup label="Category 2">
//                                                                     <option value={3}>Option 3</option>
//                                                                     <option value={4}>Option 4</option>
//                                                                 </optgroup>
//                                                             </Select>
//                                                         </FormControl>
//                                                     </Grid>
//                                                     <Grid item xs={4}>
//                                                         <FormControl sx={{m: 1}} fullWidth>
//                                                             <InputLabel htmlFor="grouped-select">Quận/Huyện</InputLabel>
//                                                             <Select
//                                                                 defaultValue=""
//                                                                 id="grouped-select"
//                                                                 label="Grouping"
//                                                             >
//                                                                 <MenuItem value="">
//                                                                     <em>None</em>
//                                                                 </MenuItem>
//                                                                 <ListSubheader>Category 1</ListSubheader>
//                                                                 <MenuItem value={1}>Option 1</MenuItem>
//                                                                 <MenuItem value={2}>Option 2</MenuItem>
//                                                                 <ListSubheader>Category 2</ListSubheader>
//                                                                 <MenuItem value={3}>Option 3</MenuItem>
//                                                                 <MenuItem value={4}>Option 4</MenuItem>
//                                                             </Select>
//                                                         </FormControl>
//                                                     </Grid>
//                                                     <Grid item xs={4}>
//                                                         <FormControl sx={{m: 1}} fullWidth>
//                                                             <InputLabel htmlFor="grouped-select">Xã/Phường</InputLabel>
//                                                             <Select
//                                                                 defaultValue=""
//                                                                 id="grouped-select"
//                                                                 label="Grouping"
//                                                             >
//                                                                 <MenuItem value="">
//                                                                     <em>None</em>
//                                                                 </MenuItem>
//                                                                 <ListSubheader>Category 1</ListSubheader>
//                                                                 <MenuItem value={1}>Option 1</MenuItem>
//                                                                 <MenuItem value={2}>Option 2</MenuItem>
//                                                                 <ListSubheader>Category 2</ListSubheader>
//                                                                 <MenuItem value={3}>Option 3</MenuItem>
//                                                                 <MenuItem value={4}>Option 4</MenuItem>
//                                                             </Select>
//                                                         </FormControl>
//                                                     </Grid>
//                                                 </Grid>
//
//                                                 <TextField
//                                                     fullWidth
//                                                     label="Địa Chỉ"
//                                                     id="fullWidth"
//                                                     sx={{margin: 1}}
//                                                 />
//
//                                                 <Box style={{margin: 7}}>
//                                                     <Typography
//                                                         variant={"h6"}
//                                                         sx={{
//                                                             display: "flex",
//                                                             alignItems: "center",
//                                                             fontWeight: "bold",
//                                                             margin: 2,
//                                                         }}
//                                                     >
//                                                         <LocalShippingIcon sx={{marginRight: "8px"}}/> Thời Gian
//                                                         Giao Hàng Dự Kiến 24/09/2023
//                                                     </Typography>
//                                                     <Typography
//                                                         variant={"h6"}
//                                                         sx={{
//                                                             display: "flex",
//                                                             alignItems: "center",
//                                                             fontWeight: "bold",
//                                                             margin: 2,
//                                                             paddingBottom: "100px",
//                                                         }}
//                                                     >
//                                                         <LocalShippingIcon sx={{marginRight: "8px"}}/> Đơn Vị Vận
//                                                         Chuyển: <Typography variant={"h6"}
//                                                                             style={{color: "blue", fontWeight: "bold"}}>Giao
//                                                         Hàng Nhanh</Typography>
//                                                     </Typography>
//                                                 </Box>
//                                             </Box>
//                                         </Box>
//                                     </Grid>
//                                     <Grid item xs={5}>
//                                         <Box style={{border: ".0625rem solid #d5d5d5"}}>
//                                             <Typography
//                                                 variant={"h4"}
//                                                 style={{marginTop: "15px", marginLeft: "20px"}}
//                                             >
//                                                 <PaymentIcon/> Thanh Toán
//                                             </Typography>
//
//                                             <Box
//                                                 sx={{
//                                                     backgroundColor: "#f5f6f8", width: "100%", // Đặt width thành 100% để rộng ra
//                                                     height: "100%", //
//                                                 }}
//                                             >
//                                                 <FormControlLabel
//
//                                                     control={<Switch
//                                                         checked={!hidden}
//                                                         onChange={handleHiddenChange}
//                                                         color="primary"
//                                                     />}
//                                                     label="Giao Hàng"
//                                                 />
//
//                                                 <Typography
//                                                     sx={{
//                                                         padding: 1,
//                                                         color: "black",
//                                                         alignItems: "flex-start",
//                                                         display: "flex",
//                                                         justifyContent: "space-between",
//                                                     }}
//                                                 >
//                                                     Mã Giảm Giá:
//                                                     <Button
//                                                         variant="outlined"
//                                                         style={{
//                                                             marginLeft: "70px", borderColor: "teal", color: "teal",
//                                                         }}
//                                                     >
//                                                         Chọn Mã Giảm Giá
//                                                     </Button>
//                                                 </Typography>
//                                                 <Typography
//                                                     sx={{
//                                                         padding: 1,
//                                                         color: "black",
//                                                         display: "flex",
//                                                         justifyContent: "space-between",
//                                                     }}
//                                                 >
//                                                     <Typography variant={"body1"}>Tiền Hàng:</Typography>
//                                                     <Typography variant={"body1"}>900.000 đ</Typography>
//                                                 </Typography>
//                                                 <Typography
//                                                     sx={{
//                                                         padding: 1,
//                                                         color: "black",
//                                                         alignItems: "flex-start",
//                                                         display: "flex",
//                                                         justifyContent: "space-between",
//                                                     }}
//                                                 >
//                                                     <Typography variant={"body1"}>Phí vận Chuyển:</Typography>
//                                                     <Typography variant={"body1"}>50.000 đ</Typography>
//                                                 </Typography>
//                                                 <Typography
//                                                     sx={{
//                                                         padding: 1,
//                                                         color: "black",
//                                                         alignItems: "flex-start",
//                                                         display: "flex",
//                                                         justifyContent: "space-between",
//                                                     }}
//                                                 >
//                                                     <Typography variant={"body1"}>Giảm Giá:</Typography>
//                                                     <Typography variant={"body1"}>50.000 đ</Typography>
//                                                 </Typography>
//
//                                                 <Box style={{display: "flex", alignItems: "center"}}>
//                                                     <Typography
//                                                         variant={"h6"}
//                                                         sx={{
//                                                             padding: 2, color: "red",
//                                                         }}
//                                                     >
//                                                         Tổng Số Tiền:
//                                                     </Typography>
//                                                     <Typography variant={"h6"}
//                                                                 style={{marginLeft: "130px", color: "red"}}>950.000
//                                                         đ</Typography>
//                                                 </Box>
//
//                                                 <Button
//                                                     variant="contained"
//                                                     sx={{
//                                                         backgroundColor: "#242424",
//                                                         "&:hover": {
//                                                             backgroundColor: "black",
//                                                         },
//                                                         marginTop: 5,
//                                                         marginBottom: 4,
//                                                         width: "80%",
//                                                         marginLeft: 5,
//                                                         fontSize: "13px",
//                                                         height: "40px",
//                                                     }}
//                                                 >
//                                                     Đặt Hàng
//                                                 </Button>
//
//                                             </Box>
//                                         </Box>
//                                     </Grid>
//                                 </Grid>
//                             </Box>
//                         ))}
//                     </Box>
//
//                 </Box>
//             </Grid>
//
//             <Grid item xs={1}></Grid>
//         </Grid>
//     );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, ButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Paper from '@mui/material/Paper';

export default function ScrollableTabsButtonAuto() {
    const [selectedTab, setSelectedTab] = React.useState(0);
    const [tabs, setTabs] = React.useState(["Hóa Đơn 1"]);

    const handleTabChange = (newTab) => {
        setSelectedTab(newTab);
    };

    const handleAddTab = () => {
        if (tabs.length < 7) { // Kiểm tra xem đã đạt đến giới hạn 7 tab chưa
            const newTabName = `Hóa Đơn ${tabs.length + 1}`;
            setTabs([...tabs, newTabName]);
            setSelectedTab(tabs.length); // Chuyển đến tab mới thêm
        }
    };


    return (
        <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
            <Button onClick={handleAddTab}>ADD</Button>
            <ButtonGroup variant="contained" color="primary" >
                {tabs.map((tabName, index) => (
                    <Button
                        key={index}
                        onClick={() => handleTabChange(index)}
                        variant={selectedTab === index ? "contained" : "outlined"}
                    >
                        {tabName}
                    </Button>
                ))}
            </ButtonGroup>
            {/* Hiển thị nội dung của tab được chọn */}
            <Box style={{ marginTop: "20px",width:"100%"}} >
                {tabs.map((tabName, index) => (
                    <Box key={index} style={{ display: selectedTab === index ? 'block' : 'none' }}>
                       hihihi
                    </Box>
                ))}
            </Box>
        </Box>
    );
}


