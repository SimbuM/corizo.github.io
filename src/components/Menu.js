import React, { useState } from "react";
import { MenuList } from "../data/data";
import Layout from "../components/Layout/Layout";
import {Button,Card,CardContent,CardMedia,Typography,Grid,Input,Container,InputAdornment,IconButton,} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToCart = (item) => {
    addToCart(item);
    navigate("/cart");
  };

  const filteredMenuList = MenuList.filter((menu) =>
    menu.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Container>
        <div className="search-bar">
          <Input
            placeholder="Search menu..."
            onChange={(e) => setSearchTerm(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </Container>
      <Grid container spacing={2}>
        {filteredMenuList.map((menu) => (
          <Grid item key={menu.name} xs={6} sm={6} md={4} lg={2}>
            <Card className="menu-card">
              <CardMedia
                component="img"
                alt={menu.name}
                height="200"
                image={menu.image}
                className="zoom-effect"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom component="div">
                  {menu.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {menu.description}
                </Typography>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <Typography variant="body1" color="textPrimary">
                    ₹ {menu.price.toFixed(2)}
                  </Typography>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleAddToCart(menu)}
                  >
                    Add To Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <style jsx>{`
        .search-bar {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .search-bar input {
          width: 300px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
        }

        .menu-card {
          transition: transform 0.2s;
        }

        .menu-card:hover {
          transform: scale(1.05);
        }

        .zoom-effect {
          transition: transform 0.2s;
        }

        .menu-card:hover .zoom-effect {
          transform: scale(1.2);
        }

        .search-bar button {
          background-color: #ff3366;
          color: #fff;
          border: none;
          border-radius: 0 5px 5px 0;
        }

        .search-bar button:hover {
          background-color: #ff1a4d;
        }
      `}</style>
    </Layout>
  );
};

export default Menu;
