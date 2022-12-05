import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import theme from "../../pages/style/palete";

const ProductCard = ({image, productName, productDescription}) => {
    return(
        <>
            <Box sx={{
                width: "200px",
                minHeight: "300px",
                color: "#315332"
            }}>
                <Box sx={{
                    display: "flex",
                    height: "200px",
                    alignItems: "center"
                }}>
                    <img src={image} width="200px" height="auto"/>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Typography variant="h5">
                        {productName}
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Typography variant="caption">
                        {productDescription}
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2
                }}>
                    <ThemeProvider theme={theme}>
                        <Button 
                            variant="outlined"
                            color="buttonSecondary"
                        >
                            Add to Cart
                        </Button>
                    </ThemeProvider>
                </Box>
            </Box>
        </>
    )
}
export default ProductCard;