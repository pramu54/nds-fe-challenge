import { Box, FormControl, IconButton, InputAdornment, OutlinedInput, Stack, Typography } from "@mui/material";
import SocialMediaBar from "../commons/socialMediaBar";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import "../components/style/header.css";
import Logo from "../img/Logo.png";

const Header = () => {
    return(
        <>
            <Box sx={{
                width: "auto",
                height: 80,
                display: "flex",
                justifyContent: 'space-around'
            }}>
                <Box sx={{
                    width: "10%",
                    height: "inherit",
                    display: "flex",
                    alignItems: "center"
                }}>
                    <select name="language" id="language">
                        <option value="english">ENG</option>
                        <option value="indonesia">IND</option>
                    </select>
                </Box>
                <Box sx={{
                    width: 100,
                    height: "inherit",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <img src={Logo} width="90px" height="90px" alt="logo"/>
                </Box>
                <Box sx={{
                    height: "inherit",
                    display: "flex",
                    alignItems: "center"
                }}>
                    <SocialMediaBar />
                </Box>
            </Box>
            <Box sx={{
                display: "flex"
            }}>
                <Box sx={{
                    width: "46%",
                    height: "15px",
                    borderTop: 1,
                    borderColor: 'grey.500'
                }} />
                <Box sx={{
                    width: "7%",
                    height: "15px",
                    borderLeft: 1,
                    borderRight: 1,
                    borderBottom: 1,
                    borderColor: 'grey.500'
                }} />
                <Box sx={{
                    width: "49%",
                    height: "15px",
                    borderTop: 1,
                    borderColor: 'grey.500'
                }} />
            </Box>
            <Box sx={{
                width: "auto",
                height: 50,
                display: "flex",
                justifyContent: 'space-around',
                borderBottom: 1,
                borderColor: 'grey.500'
            }}>
                <Box>
                    <FormControl variant="standard">
                        <OutlinedInput
                            id="input-with-icon-adornment"
                            size="small"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <TuneIcon />
                                </InputAdornment>
                            }
                            sx={{
                                width: "150px"
                            }}
                        />
                    </FormControl>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Typography sx={{ minWidth: 100, fontSize: 12, fontWeight: "Bold"}}>EXCLUSIVE</Typography>
                    <Typography sx={{ minWidth: 100, fontSize: 12, fontWeight: "Bold" }}>NEW ARRIVALS</Typography>
                    <Typography sx={{ minWidth: 100, fontSize: 12, fontWeight: "Bold" }}>WOODEN</Typography>
                    <Typography sx={{ minWidth: 100, fontSize: 12, fontWeight: "Bold" }}>SHOWCASE</Typography>
                    <Typography sx={{ minWidth: 100, fontSize: 12, fontWeight: "Bold" }}>ACCESSORIES</Typography>
                </Box>
                <Box>
                    <Stack direction="row" spacing={1}>
                        <IconButton aria-label="wishlist" color="success" size="small">
                            <LocalMallOutlinedIcon />
                        </IconButton>
                        <IconButton aria-label="favorites" color="success" size="small">
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
                        <IconButton aria-label="profile" color="success" size="small">
                            <PermIdentityOutlinedIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}
export default Header;