import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, IconButton, Stack } from '@mui/material';

const SocialMediaBar = () => {
    return(
        <>
            <Box>
                <Stack direction="row" spacing={1}>
                    <IconButton aria-label="instagram" color="success" size="small">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton aria-label="youtube" color="success" size="small">
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton aria-label="Facebook" color="success" size="small">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="Twitter" color="success" size="small">
                        <TwitterIcon />
                    </IconButton>
                </Stack>
            </Box>
        </>
    )
}
export default SocialMediaBar;