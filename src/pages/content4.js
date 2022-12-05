import { Avatar, Box, Grid, Rating, Typography } from "@mui/material";
import Person from "../img/person.jpg";

const Review = () => {
    return(
        <>
            <Box sx={{
                display: "flex",
                mx: 12,
                mt: 12
            }}>
                <Grid container spacing={1}>
                    <Grid xs={4}>
                        <Box sx={{
                            color: "#315332"
                        }}>
                            <Typography variant="h2">
                                "
                            </Typography>
                            <Typography variant="h3" fontWeight="bold">
                                Rated by Client on Our Products
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={5}>
                        <Grid container spacing={1} direction="column">
                            <Grid>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    ml: 40
                                }}>
                                    <Box sx={{
                                        display: "inherit",
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={Person}
                                            sx={{ 
                                                width: 24, 
                                                height: 24,
                                                opacity: 0.5 
                                            }}
                                        />
                                        <Avatar 
                                            alt="Remy Sharp" 
                                            src={Person}
                                            sx={{
                                                opacity: 0.5
                                            }}
                                        />
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={Person}
                                            sx={{ width: 56, height: 56 }}
                                        />
                                        <Avatar 
                                            alt="Remy Sharp" 
                                            src={Person}
                                            sx={{
                                                opacity: 0.5
                                            }}
                                        />
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={Person}
                                            sx={{
                                                width: 24, 
                                                height: 24,
                                                opacity: 0.5
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        color: "#315332"
                                    }}>
                                        <Typography variant="caption" fontWeight="bold" textAlign="center">Lincoln George</Typography>
                                        <Typography variant="caption" textAlign="center">Interior Designer of UC JLAB</Typography>
                                        <Box sx={{
                                            ml: 4
                                        }}>
                                            <Rating name="half-rating" defaultValue={5} precision={0.5} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid>
                                <Box sx={{
                                    mt: 3,
                                    ml: 28,
                                    color: "#315332"
                                }}>
                                    <Typography variant="body1" textAlign="center">
                                        Excelent product, delivered sooner
                                        then said. Smooth easy purchase. Ilaria
                                        lamp looks beautiful.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Review;