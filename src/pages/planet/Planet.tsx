import Box from "@mui/material/Box/Box";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import { useState } from "react";
import { SizedBox, Text, } from "../../components/base";

import bg2Image from '../../images/bg2.png'
import idx1Image from '../../images/idx1.png'
import idx2Image from '../../images/idx2.png'
import planetDiscord from '../../images/planetdiscord.png'
import planetTwitter from '../../images/planettwitter.png'

export type TapBtnProps = {
    isActive: boolean,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
}

const TapBtn = (props: TapBtnProps):JSX.Element=>{
    const {
        isActive,
        onClick,
    } = props;
    return (
        <Box sx={{
            width: '8px',
            borderRadius: '4px',
            height: '80px',
            backgroundColor: isActive? '#2CFF98' : '#00000088',
            cursor: 'pointer',
        }} onClick={onClick}></Box>
    )
}

type tapState = 0 | 1 | 2 | 3

const textStyle: SxProps<Theme> | undefined = {
    color: '#fff',
    fontSize: '18px',
    fontFamily: 'MELight',
};

type ContentProps = {
    index: tapState,
}

const Tap0Content = (props: ContentProps):JSX.Element=>{
    const {index} = props;
    if(index !== 0){
        return <div/>
    }
    return (
        <Box sx={{
        }}>
            <h1><Text sx={{
                color: '#fff',
                fontSize: '60px',
            }}>ALL FOR POOPOO</Text></h1>

            <Box sx={textStyle}>
                In the year 2048, our digital life worth more than our
physical life. Al becomes smarter than human. Everything goes digital.
            </Box>
            <Box sx={textStyle}>
            'Dummy Puggy" is the digital species created in the metaverse e, They are extremely special.
            </Box>
            <Box sx={textStyle}>
            Their poopoos have a spice that is super rare and priceless.Go collect the poopoos that will make you rich!
            </Box>
            <Box sx={textStyle}>
            The puggies also have superpowers. They can teleport anywh here in the metaverse. When they come back, they will always bring you surprises!
            </Box>
        </Box>
    )
}

const Tap1Content = (props: ContentProps):JSX.Element=>{
    const {index} = props;
    if(index !== 1){
        return <div/>
    }
    return (
        <Box sx={{
        }}>
            <h1><Text sx={{
                color: '#fff',
                fontSize: '60px',
            }}>TEAM</Text></h1>

            <Box sx={textStyle}>
            The Dummy Puggy team consists of 5 puggies. They live in a big kennel together in LA. Each contributes to their areas and hypes about the Dummy Puggy project
            </Box>
            <Box sx={{height: 50}}/>
            <img src={idx1Image} style={{maxWidth: '100%'}} alt="team"/>
        </Box>
    )
}

const Tap2Content = (props: ContentProps):JSX.Element=>{
    const {index} = props;
    if(index !== 2){
        return <div/>
    }
    return (
        <Box sx={{
        }}>
            <h1><Text sx={{
                color: '#fff',
                fontSize: '60px',
            }}>POWER BY COMMUNITY</Text></h1>

            <Box sx={textStyle}>
            Puggy team dedicates to build a global community with all dummies together, which is Dummy Planet! 
            </Box>
            <Box sx={textStyle}>
            Dummy Planet integrates comic, art, game, and social elements into it. At present, the team is working on artist co-branding, online & offline activities, and games. News will be continuously updated on Discord and Twitter.
            </Box>
            <Box sx={{height: 50}}/>
            <img src={idx2Image} style={{maxWidth: '100%'}} alt="POWER BY COMMUNITY"/>
        </Box>
    )
}

const Tap3Content = (props: ContentProps):JSX.Element=>{
    const {index} = props;
    if(index !== 3){
        return <div/>
    }
    return (
        <Box sx={{
        }}>
            <h1><Text sx={{
                color: '#fff',
                fontSize: '60px',
            }}>ON CRAZY SCI-FI ADVENTURE</Text></h1>

            <Box sx={{height: 50}}/>
            <a href="https://discord.gg/89USG2sytF" target="_blank" rel="noreferrer"> <img src={planetDiscord} width={286} alt="discord" /></a>
            <SizedBox width="25px"/>
            <a href="https://twitter.com/DummyPuggyNFT" target="_blank" rel="noreferrer"> <img src={planetTwitter} width={286} alt="twitter" /></a>
        </Box>
    )
}

const Planet = ():JSX.Element=>{
    
    const [idx, setIdx] = useState<tapState>(0)

    return (
        <>
            <Box sx={{
                background: `url(${bg2Image}) bottom right no-repeat`,
                backgroundSize: '100vw 56.25vw',
                minHeight: '100vh',
                
                paddingTop: '90px',
            }}>
                <Box sx={{
                    maxWidth: 1440,
                    position: 'relative',
                    margin: '0 auto',
                }}>

                    <Box sx={{
                        position:'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        top: '50vh',
                        left: '10px',
                        transform: 'translateY(-220px)'
                    }}>
                        <TapBtn isActive={idx === 0} onClick={()=>{
                            setIdx(0)
                        }}/>
                        <SizedBox height={'30px'}/>
                        <TapBtn isActive={idx === 1} onClick={()=>{
                            setIdx(1)
                        }}/>
                        <SizedBox height={'30px'}/>
                        <TapBtn isActive={idx === 2} onClick={()=>{
                            setIdx(2)
                        }}/>
                        <SizedBox height={'30px'}/>
                        <TapBtn isActive={idx === 3} onClick={()=>{
                            setIdx(3)
                        }}/>
                    </Box>


                    <Box sx={{
                        padding: '80px 410px 20px 100px',
                    }}>
                        <Tap0Content index={idx} />
                        <Tap1Content index={idx} />
                        <Tap2Content index={idx} />
                        <Tap3Content index={idx} />
                    </Box>
                    
                </Box>
                

            </Box>
        </>
    );
}

export default Planet;