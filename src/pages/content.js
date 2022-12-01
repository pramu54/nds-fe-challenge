import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import Sofa from "../img/sofa1.png";
import Table from "../img/table1.png";
import "../pages/style/content.css";
import theme from "./style/palete";

const Home = () => {
    return(
        <>
            <Box sx={{
                display: "flex",
            }}>
                <Box sx={{
                    margin: 10
                }}>
                    <Typography variant="h2" sx={{color: "#324f30"}}>Crafted Best Wood Collection For You</Typography>
                    <ThemeProvider theme={theme}>
                    <Button 
                        variant="contained" 
                        color="button"
                        sx={{
                            marginTop: "30px",
                            color: "black"
                        }}
                    >
                        EXCLUSIVE GALERY
                    </Button>
                    </ThemeProvider>
                </Box>
                <Box>
                    <div className="shape">
                        <img id="sofa1" src={Sofa} width="500px" height="auto" alt="sofa1" />
                        <img id="table1" src={Table} width="300px" height="auto" alt="table1" />
                    </div>
                </Box>
            </Box>
        </>
    )
}
export default Home;