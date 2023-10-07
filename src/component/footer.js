import React from "react";
import { Button, styled } from "@mui/material";
import { ReactDOM } from "react";
import { Carousel } from "react-responsive-carousel";
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
import { useNavigate } from "react-router-dom";
function Footer() {
  return (
    <React.Fragment>
      <div>
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
              style={{
                backgroundColor: "black",
                color: "white",
                width: "300px",
              }}
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
    </React.Fragment>
  );
}
export default Footer;
