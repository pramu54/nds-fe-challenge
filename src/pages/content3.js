import { Box, Button, Grid, ImageList, ImageListItem, ThemeProvider, Typography } from "@mui/material";
import theme from "./style/palete";
import "../pages/style/content.css";
import ProductCard from "../components/productCard/productCard";
import Lamp from "../img/lamp.png";
import Chair from "../img/chair.png";
import Table from "../img/table1.png";
import Sofa from "../img/sofa1.png";
import Pot1 from "../img/1.jpg";
import Pot2 from "../img/2.jpeg";
import Pot3 from "../img/3.png";
import Pot4 from "../img/4.jpg";
import Slider from "react-slick";
import "../pages/style/content.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const itemData = [
    {
      img: Pot1,
      title: 'Pot1',
    },
    {
      img: Pot2,
      title: 'Pot2',
    },
    {
      img: Pot3,
      title: 'Pot3',
    },
    {
      img: Pot4,
      title: 'Pot4',
    }
  ];

const Products = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return(
        <>
            <Box sx={{
                display: "flex",
                mx: 12,
                mt: 12
            }}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Box sx={{
                            mx: 8,
                            mt: 5
                        }}>
                            <Box sx={{
                                color: "#315332"
                            }}>
                                <Typography variant="h4">
                                    Our Products
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <Box sx={{
                                color: "#315332",
                            }}>
                                <Box>
                                    <Typography variant="caption">
                                        We're taking positive steps to reduce our impact on the planet.
                                    </Typography>
                                    <Typography variant="caption">
                                        For us, that means retailing responsibility.
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    mt: 3
                                }}>
                                    <Typography variant="caption">
                                        R E A D M O R E
                                    </Typography>
                                </Box>
                            </Box> 
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{
                            mt: 5,
                            ml: 10,
                        }}>
                            <div className="menuList">
                                <ul>
                                    <li>NEW IN</li>
                                    <li>SOFAS</li>
                                    <li>CHAIRS</li>
                                    <li>TABLES</li>
                                    <li>BEDS</li>
                                    <li>STORAGE</li>
                                    <li>LIGHTING</li>
                                    <li>GARDENG</li>
                                    <li>KITCHEN</li>
                                    <li>LIFESTYLE</li>
                                </ul>
                            </div>
                        </Box>
                        <Box sx={{
                            ml: 8,
                        }}>
                            <ThemeProvider theme={theme}>
                            <Button 
                                variant="contained" 
                                color="button"
                                sx={{
                                    color: "black"
                                }}
                            >
                                GO SHOP
                            </Button>
                            </ThemeProvider>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{
                            mt: 5
                        }}>
                            <Slider {...settings}>
                                    <ProductCard 
                                        image={Chair} 
                                        productName="Haru" 
                                        productDescription="Single Sofa Bed, Faux Sheepskin Weave"
                                    />
                                    <ProductCard 
                                        image={Lamp} 
                                        productName="Hettie" 
                                        productDescription="Single Sofa Bed, Faux Sheepskin Weave"
                                    />
                                    <ProductCard 
                                        image={Table} 
                                        productName="Ebrox" 
                                        productDescription="Single Sofa Bed, Faux Sheepskin Weave"
                                    />
                                    <ProductCard 
                                        image={Sofa} 
                                        productName="Ebrox" 
                                        productDescription="Single Sofa Bed, Faux Sheepskin Weave"
                                    />
                            </Slider>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                display: "flex",
                mx: 12,
                mt: 12
            }}>
                <div className="backgroundProduct">
                    <Grid container spacing={1}>
                        <Grid xs={6}>
                            <Box sx={{
                                ml: 2,
                                mt: 2
                            }}>
                                <ImageList sx={{ width: 400, height: 700 }} variant="woven" cols={2} gap={8}>
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.img}?w=161&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Box>
                        </Grid>
                        <Grid xs={6}>
                            <Box sx={{
                                mt: 10,
                                mr: 25
                            }}>
                                <Box>
                                    <Typography variant="h3" fontWeight="bold">
                                        What You Need We Best for Creativity
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    mt: 5
                                }}>
                                    <Typography variant="body1">
                                        We're taking positive steps to reduce our 
                                        impact on the planet. For us, that means
                                        retailing responsibly.
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    mt: 5
                                }}>
                                    <ThemeProvider theme={theme}>
                                    <Button 
                                        variant="contained" 
                                        color="button"
                                        sx={{
                                            color: "black"
                                        }}
                                    >
                                        OUR INTERIORS
                                    </Button>
                                    </ThemeProvider>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </>
    )
}
export default Products;