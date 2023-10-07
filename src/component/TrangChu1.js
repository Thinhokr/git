import React from "react";
import { Button, styled } from "@mui/material";
import { ReactDOM } from "react";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CardMedia from "@mui/material/CardMedia";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { hover } from "@testing-library/user-event/dist/hover";
import { dataWomen } from "../data";
import SanPham from "../SanPham";
const TrangChu1 = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{maxWidth:'100%'}}>
      <div className="background-image" align="left">
        {/* Đặt ảnh dưới đây */}
        <img
          src="https://store.psg.fr/content/ws/551368/dt_trd_en.png"
          alt="Background"
          className="background-image"
          width="100%"
        />
      </div>

      <h1 align="center" style={{ color: "gray", fontSize: "45px" }}>
        SHOP BY PLAYER
      </h1>
      <Grid container>

        <Grid item xs={3}>
          <div className="background-image" align="left">
            {/* Đặt ảnh dưới đây */}
            <img
              src="https://store.psg.fr/content/ws/552029/dt_kang.png"
              alt="Background"
              className="background-image"
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="background-image" align="left">
            {/* Đặt ảnh dưới đây */}
            <img
              src="https://store.psg.fr/content/ws/552029/dt_kang.png"
              alt="Background"
              className="background-image"
            />
          </div>
        </Grid>
       
        <Grid item xs={3}>
          <div className="background-image" align="left">
            {/* Đặt ảnh dưới đây */}
            <img
              src="https://store.psg.fr/content/ws/552029/dt_kang.png"
              alt="Background"
              className="background-image"
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="background-image" align="left">
            {/* Đặt ảnh dưới đây */}
            <img
              src="https://store.psg.fr/content/ws/552029/dt_kang.png"
              alt="Background"
              className="background-image"
            />
          </div>
        </Grid>
      </Grid>
      <div className="background-image" style={{ marginTop: "20px" }}>
        {/* Đặt ảnh dưới đây */}
        <img
          src="https://store.psg.fr/content/ws/551368/dt_training_en.png"
          alt="Background"
          className="background-image"
          width="100%"
        />
      </div>
   

      <p className="men" style={{ fontSize: "23px" }}>
        Men's Best Seller
      </p>
      {<SanPham/>}

  

      <div className="background-image" style={{ marginTop: "10px" }}>
        {/* Đặt ảnh dưới đây */}
        <img
          src="https://store.psg.fr/content/ws/506144/aspot_en.png"
          alt="Background"
          className="background-image"
          width="100%"
        />
      </div>

      <p className="men" style={{ fontSize: "23px" }}>
        Kid Best Seller
      </p>

      
      {<SanPham/>}

      <Grid container style={{ marginTop: "15px", marginLeft:'5px' }}>
        <Grid item xs={6}>
          <div className="background-image" align="left">
            {/* Đặt ảnh dưới đây */}
            <img
              src="https://store.psg.fr/content/ws/551368/dt_lifestyle_en.png"
              alt="Background"
              className="background-image"
              style={{width:'99%'}}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="background-image" align="left">
            {/* Đặt ảnh dưới đây */}
            <img
              src="https://store.psg.fr/content/ws/551368/dt_aj_en.png"
              alt="Background"
              className="background-image"
              style={{width:'99%'}}

            />
          </div>
        </Grid>
      </Grid>

      <p className="men" style={{ fontSize: "23px" }}>
        Women's Best Seller
      </p>

      {<SanPham/>}
      <div className="background-image" style={{ marginTop: "20px" }}>
        {/* Đặt ảnh dưới đây */}
        <img
          src="https://store.psg.fr/content/ws/535758/desktop_footer.png"
          alt="Background"
          className="background-image"
          width="100%"
        />
      </div>
      <Grid
        container
        style={{ backgroundColor: "#f4f5f5", textAlign: "center" }}
      >
        <Grid item xs={3}>
          <h4>Customer Service</h4>
          <p>Help</p>
          <p>Track Order</p>
          <p>Size Chart</p>
        </Grid>

        <Grid item xs={3}>
          <h4>Worry Free Shopping</h4>
          <p>Safe Shopping</p>
          <p>Delivery & Shipping</p>
          <p>90-Day Returns</p>
        </Grid>

        <Grid item xs={3}>
          <h4>Worry Free Shopping</h4>
          <p>Safe Shopping</p>
          <p>Delivery & Shipping</p>
          <p>90-Day Returns</p>
        </Grid>

        <Grid item xs={3}>
          <p>Stay updated on sales, new items and more</p>
          <Button
            style={{ backgroundColor: "black", color: "white", width: "300px" }}
          >
            SIGN UP & SAVE 100%
          </Button>
          <h5 style={{ marginRight: "235px" }}>Follow us</h5>
          <div className="icon" style={{ display: "flex", gap: "20px" }}>
            <FacebookIcon />
            <TelegramIcon />
            <YouTubeIcon />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default TrangChu1;
