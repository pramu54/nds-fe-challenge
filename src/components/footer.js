import { Box, Button, FilledInput, FormControl, Grid, IconButton, InputAdornment, Stack, ThemeProvider, Typography } from "@mui/material";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppleIcon from '@mui/icons-material/Apple';
import theme from "../pages/style/palete";
import "./style/footer.css";

const Footer = () => {
    return(
        <>
            <Box sx={{
                width: "auto",
                height: 500,
            }}>
                <Box sx={{
                    width: "auto", 
                    height: 400, 
                    margin: "100px",
                    backgroundColor: '#fcf6dc'
                }}>
                    <Grid container spacing={1} direction="row">
                        <Grid item xs={4}>
                            <Box sx={{ 
                                width: 400, 
                                height: 300,
                                padding: 5
                            }}>
                                <Typography sx={{ color: "#324f30" }} variant="h4">
                                    Subscribe to Our Newsletter
                                </Typography>
                                <FormControl variant="standard">
                                    <FilledInput
                                        id="input-with-icon-adornment"
                                        size="small"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <ArrowForwardOutlinedIcon />
                                            </InputAdornment>
                                        }
                                        sx={{
                                            width: "250px",
                                            marginTop: "30px"
                                        }}
                                    />
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{
                                width: 200, 
                                height: 300,
                                paddingTop: 6,
                                paddingLeft: 5
                            }}>
                                <Box>
                                    <Typography sx={{ color: "#324f30", fontWeight: "bold" }} variant="button">
                                        Links
                                    </Typography>
                                </Box>
                                <Box sx={{marginTop: 4}}>
                                    <ul className="link-style">
                                        <li>About Us</li>
                                        <li>Our Story</li>
                                        <li>Designers</li>
                                        <li>Customer Reviews</li>
                                        <li>Careers</li>
                                        <li>Help & FAQ</li>
                                    </ul>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                        <Box sx={{
                                width: 200, 
                                height: 300,
                                paddingTop: 6,
                                paddingLeft: 5
                            }}>
                                <Box>
                                    <Typography sx={{ color: "#324f30", fontWeight: "bold" }} variant="button">
                                        Products
                                    </Typography>
                                </Box>
                                <Box sx={{marginTop: 4}}>
                                    <ul className="link-style">
                                        <li>Living Room Furnit..</li>
                                        <li>Dining Room Furnit..</li>
                                        <li>Kitchen Furniture</li>
                                        <li>Bedroom Furniture</li>
                                        <li>Bathroom Furniture</li>
                                        <li>Office Furniture</li>
                                        <li>Garden Furniture</li>
                                    </ul>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                        <Box sx={{
                                width: 200, 
                                height: 300,
                                paddingTop: 6,
                                paddingLeft: 5
                            }}>
                                <Box>
                                    <Typography sx={{ color: "#324f30", fontWeight: "bold" }} variant="button">
                                        Contacts
                                    </Typography>
                                </Box>
                                <Box sx={{marginTop: 4}}>
                                    <ul className="link-style">
                                        <li id="head-office">Head Office:</li>
                                        <li>Joan Romero 666-4366 Lacinia Avenue Idaho Falls Ohio 19253</li>
                                        <li>{"(248) 675-4007"}</li>
                                        <li>metris4e@hotmail.com</li>
                                    </ul>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 6
                    }}>
                        <Box>
                            <Typography variant="caption" sx={{ color: "#324f30"}}>
                                Copyright METRIS,2022. All Right Reserved
                            </Typography>
                        </Box>
                        <Box>
                            <Stack direction="row" spacing={1}>
                                <IconButton aria-label="Facebook" color="success" size="small">
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton aria-label="instagram" color="success" size="small">
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton aria-label="linkedin" color="success" size="small">
                                    <LinkedInIcon />
                                </IconButton>
                            </Stack>
                        </Box>
                    </Box>
                        <Box sx={{
                            display: "flex"
                        }}>
                            <ThemeProvider theme={theme}>
                                <Button 
                                    variant="contained" 
                                    startIcon={<PlayArrowIcon />}
                                    color="button"
                                    sx={{
                                        marginTop: 3,
                                        color: "#324f30"
                                    }}
                                >
                                    Play Store
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    startIcon={<AppleIcon />}
                                    color="buttonSecondary"
                                    sx={{
                                        marginTop: 3,
                                        color: "#324f30"
                                    }}
                                >
                                    App Store
                                </Button>
                            </ThemeProvider>
                        </Box>
                </Box>
                
            </Box>
        </>
    )
}
export default Footer;