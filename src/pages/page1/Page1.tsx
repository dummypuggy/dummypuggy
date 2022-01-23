import Box from "@mui/material/Box/Box";

import bgImage from '../../images/bg.png'
import bgVideo from '../../images/bg.mp4'
import joinDiscordImage from '../../images/joindiscord.png'


const BG = ():JSX.Element=>{

    return (
        <>
            <Box sx={
                {
                    position: 'relative',
                    // width: '100vw',
                    // left: 0,
                    // right: 0,
                    height: '56.12vw',
                    maxHeight: '100vh',
                    overflow: 'hidden',
                }
            }>
                <Box sx={{
                    inset: 0,
                    position: 'absolute',
                    background: `url(${bgImage}) bottom no-repeat`,
                    backgroundSize: 'cover',
                }}>

                </Box>
                <video width="100%"  preload="auto" loop muted playsInline autoPlay style={{
                    overflow: 'hidden',
                    position: 'absolute',
                    right: '0',
                    left: '0',
                    bottom: '0',
                }}>
                  <source src={bgVideo} type="video/mp4" />
                </video>
                <a style={{
                    display: 'block',
                    width: '76vw',
                    height: '12.3vw',
                    position: 'absolute',
                    left: '12vw',
                    right: '12vw',
                    bottom: 0,
                    cursor: 'pointer',
                    background: `url(${joinDiscordImage}) bottom no-repeat`,
                    backgroundSize: 'contain',
                    textIndent: '-9999px',
                }} href="https://discord.gg/89USG2sytF"  target="_blank" rel="noreferrer">join discord</a>
            </Box>
        </>
    );
}

const Page1 = ():JSX.Element=>{

    return (
        <>
            <BG/>
        </>
    );
}

export default Page1;