import React from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Search from "../component/Search"

const Header = () => {
  return (
    <div >
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", height: "40px", marginBottom: "10px" }}
      >
        <Toolbar>
          <Typography
            variant="h7"
            align="left"
            style={{ marginBottom: "24px" }}
            pl={2}
            sx={{ flexGrow: 1 }}
          >
            SIGN UP & SAVE 10%
          </Typography>
          <Button
            style={{ marginBottom: "25px", fontSize: "13px", marginRight:'20px' }}
            
          >
            <Link to="/login" style={{color:'white', fontFamily:'Arial', textDecoration:'none'}}>My Account</Link>
          </Button>

          <Link to="/cart">
            <ShoppingCartIcon style={{ marginBottom: "25px", color:'white' }} ></ShoppingCartIcon>
          </Link>
        </Toolbar>
      </AppBar>
      <div className="non-header">
        <Grid container>
          <Grid item xs={4}>
            <div className="background-image">
              {/* Đặt ảnh dưới đây */}

              <Link to="">
                {" "}
                <img
                  src="https://store.psg.fr/content/assets/__0-136652413036.96703.svg"
                  alt="Background"
                  className="background-image"
                  width="80%"
                  marginLeft="20px"
                />
              </Link>
            </div>
          </Grid>
          {/* <Grid item xs={8} style={{ display: "flex", alignItems: "center" }}>
            <div className="wrapper">
              <div className="search-input">
              <input
              type="text"
              placeholder="Search"
              style={{
                height: "27px",
                width: "500px",
                marginTop: "1px",
                border: "1px solid #ccc", // Thêm border để tạo hiệu ứng ô input
                borderRadius: "4px", // Bo góc ô input
                padding: "4px 8px", // Khoảng cách giữa nội dung và border
              }}
            />
            <SearchIcon className="icon"
              style={{
                marginLeft: "-30px",
                zIndex: 1,
                position: "relative",
                marginTop: "3px",
              }}
            />
            <div class="autocom-box">
          
          </div>

              </div>
              {<Search/>}
            </div>
          </Grid> */}
        </Grid>
      </div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", height: "40px" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            color="inherit"
            sx={{
              marginBottom: "20px",
              
              fontSize: "12px",

              "&:hover": {
                backgroundColor: "gray",
              },
            }}
            className="button"
          >
            <Link style={{color:'white', textDecoration:'none'  }} to="/jordan">JORDAN</Link>
          </Button>
          <Button
            color="inherit"
            sx={{ marginBottom: "20px", fontSize: "12px" }}
          >
            KITS
          </Button>
          <Button
            color="inherit"
            sx={{ marginBottom: "20px", fontSize: "12px" }}
          >
            TRAINING
          </Button>
          <Button
            color="inherit"
            sx={{ marginBottom: "20px", fontSize: "12px" }}
          >
            SHOP BY PLAYER
          </Button>
          <Button
            color="inherit"
            sx={{ marginBottom: "20px", fontSize: "12px" }}
          >
            MEN
          </Button>
          <Button
            color="inherit"
            sx={{ marginBottom: "20px", fontSize: "12px" }}
          >
            WOMEN
          </Button>
          <Button
            color="inherit"
            sx={{ marginBottom: "20px", fontSize: "12px" }}
          >
            KIDS
          </Button>
          <Button
            color="inherit"
            sx={{ marginBottom: "20px", fontSize: "12px" }}
          >
            RETRO
          </Button>
          <Button
            color="inherit"
            sx={{ marginBottom: "20px", fontSize: "12px" }}
          >
            GIFT
          </Button>
          <Button
            color="inherit"
            sx={{ marginBottom: "20px", fontSize: "12px" }}
          >
            CLEARANCE
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
