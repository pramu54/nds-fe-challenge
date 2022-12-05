import { Box, Button, Grid, ThemeProvider, Typography } from "@mui/material";
import Lamp from "../img/lamp.png";
import Chair from "../img/chair.png";
import "../pages/style/content.css";
import theme from "./style/palete";

const Featured = () => {
    return(
        <>
            <Box sx={{
                display: "flex",
                mx: 12,
                mt: 12
            }}>
                <Box sx={{
                    color: "#315332"
                }}>
                    <Typography variant="h3" fontWeight="bolder">
                        This Week Featured
                    </Typography>
                    <Typography variant="h3" fontWeight="bolder">
                        Product
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                mx: 12,
                mt: 5
            }}>
                <Box sx={{
                    width: "100%",
                }}>
                    <div className="background">
                        <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Box sx={{
                                color: "white",
                                mx: 8,
                                mt: 5
                            }}>
                                <Box>
                                    <Typography variant="h4">
                                        Ogilvy
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    mt: 2
                                }}>
                                    <Typography variant="caption">
                                        Table Lamp, Green & Antique Brass
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    mt: 2
                                }}>
                                    <Typography variant="p">
                                        Ogilvy lights the way to an industrial home,
                                        with its matte green powder coating and
                                        copper detailin. Angle the directional cone
                                        shade where you need it this table lamp
                                        gets the look and the light you want.
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    mt: 5
                                }}>
                                    <Typography variant="button">
                                        R E A D M O R E
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{
                                display: "flex",
                                color: "white",
                            }}>
                                <Box>
                                    <ThemeProvider theme={theme}>
                                    <Button 
                                        variant="contained" 
                                        color="button"
                                        sx={{
                                            // position: "relative",
                                            marginTop: "300px",
                                            color: "black"
                                        }}
                                    >
                                        Add to cart
                                    </Button>
                                    </ThemeProvider>
                                </Box>
                                <div className="lampBackground">
                                    <img id="lamp" src={Lamp} height={100} width="auto"/>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                        <Box sx={{
                                display: "flex",
                                color: "white",
                            }}>
                                <div className="chairBackground">
                                    <img id="chair" src={Chair} height={100} width="auto"/>
                                </div>
                                <Box>
                                    <ThemeProvider theme={theme}>
                                    <Button 
                                        variant="contained" 
                                        color="button"
                                        sx={{
                                            // position: "relative",
                                            marginTop: "400px",
                                            color: "black"
                                        }}
                                    >
                                        Add to cart
                                    </Button>
                                    </ThemeProvider>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                        <Box sx={{
                                color: "white",
                                mx: 8,
                                mt: 5
                            }}>
                                <Box>
                                    <Typography variant="h4">
                                        Arais
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    mt: 2
                                }}>
                                    <Typography variant="caption">
                                        Dining Chair, Moss Green Velvet with Black Legs
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    mt: 2
                                }}>
                                    <Typography variant="p">
                                        The perfect seat for dining, our upholstered
                                        Lule chairs offer contemporary style
                                        wheter you're enjoying a meal alone or
                                        with guests. Bon Appetit.
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    mt: 5
                                }}>
                                    <Typography variant="button">
                                        R E A D M O R E
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        </Grid>
                    </div>
                </Box>
            </Box>
        </>
    )
}
export default Featured;