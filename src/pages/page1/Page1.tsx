import Box from "@mui/material/Box/Box";

import bgImage from '../../images/bg.png'
import bgVideo from '../../images/bg.mp4'
import joinDiscordImage from '../../images/joindiscord.png'


const BG = ():JSX.Element=>{

    return (
        <>
            <Box>
                <Box sx={
                {
                    position: 'relative',
                    // width: '100vw',
                    // left: 0,
                    // right: 0,
                    // height: '56.12vw',
                    height: '100vh',
                    maxHeight: '100vh',
                    overflow: 'hidden',
                }
            }>
                <Box sx={{
                    inset: 0,
                    position: 'absolute',
                    background: `url(${bgImage}) center no-repeat`,
                    backgroundSize: 'cover',
                }}>

                </Box>
                <video  preload="auto" loop muted playsInline autoPlay style={{
                    height: '100%',
                    width: '177.77777778vh',
                    minWidth: '100%',
                    minHeight: '56.25vw', 
//                     overflow: 'hidden',
                    position: 'absolute',
                    // position: absolute;
    left: '50%', /* % of surrounding element */
    top: '50%',
    transform: 'translate(-50%, -50%)',
                    // left: 'calc(calc(100%-177.77777778vh)/2)',
//                     right: '0',
//                     left: '50vw',
//                     transform: 'translateX(-50vw)',
//                     minWidth: '100%',
//   minHeight: '100%',
//   boxSizing: 'border-box',
                }}>
                  <source src={bgVideo} type="video/mp4" />
                </video>
                <Box sx={{
                    inset: 0,
                    position: 'absolute',
                }}></Box>
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
                    // textIndent: '-9999px',
                }} href="https://discord.gg/89USG2sytF"  target="_blank" rel="noreferrer">
                <Box sx={{
                    position: 'absolute',
                    left: '12vw',
                    bottom: '2.8vw',
                    color: '#fff',
                    fontSize: '18px',
                    fontFamily: 'MERegular',
                }}>Whitelist is ongoing...</Box>
                </a>
            </Box>
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