import Box from "@mui/material/Box/Box";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Expanded, SizedBox, Text } from "../base";

import discordIcon from '../../images/discord.png'
import twitterIcon from '../../images/twitter.png'
import mobileBgImage from '../../images/mobile-bg.png'

import mobileCloseImage from '../../images/mobile-close.png'
import mobileMoreImage from '../../images/mobile-more.png'
import { useState } from "react";

// import insIcon from '../../images/ins.png'

export type NavItemProps = {
    to: string,
    title: string,
}

const NavItem = (props: NavItemProps):JSX.Element=>{
    const {
        to,
        title,
    } = props;

    const location = useLocation();
    let navigate = useNavigate();
    const isActive = location.pathname === to;
    
    return (
        <>
            <Box sx={{
                lineHeight: '90px',
                color: isActive? '#2CFF98' : '#fff',
                cursor: !isActive? 'pointer' : 'text',
            }} onClick={()=>{
                if(!isActive)navigate(to)
            }}>
                <Text>{title}</Text>
            </Box>
        </>
    )
}
export type MobileNavProps = {}

type MoreOrCloseType = 'close' | 'more'

export type MoreOrCloseProps = {
    state: MoreOrCloseType,
    onStateChange?: (_state: MoreOrCloseType)=>void,
}

const MoreOrClose = (props: MoreOrCloseProps):JSX.Element=>{
    const { state, onStateChange } = props;
    
    return (
        <>
            <Box sx={{
                background: `url(${state === 'close' ? mobileMoreImage : mobileCloseImage}) center no-repeat`,
                backgroundSize: 'contain',
                width: '44px',
                height: '44px',
                marginTop: '5px',
            }} onClick={()=>{
                state === 'close' ? onStateChange && onStateChange('more') : onStateChange && onStateChange('close')
            }}/>
            
        </>
    )
}

const MobileNav = (props: MobileNavProps):JSX.Element=>{
    const [_state, set_state] = useState<MoreOrCloseType>('close');

    return (
        <>
            <Box sx={{
                position: 'absolute',
                width: '100vw',
                height: '54px',
                zIndex: 9999,
            }}>
                <Box sx={{
                    position: 'absolute',
                    width: '100vw',
                    height: '54px',
                    filter: 'blur(15px)',
                    background: `url(${mobileBgImage}) top no-repeat`,
                    backgroundSize: 'cover',
                }}>
                </Box>
                <Box sx={{
                    position: 'absolute',
                    width: '100vw',
                    height: '54px',
                    backgroundColor: 'rgba(0,0,0,.1)',
                    display: 'flex',
                }}>
                    <h1 className="logo mobile">DummyPuggy</h1>
                    <Expanded/>
                    <MoreOrClose state={_state} onStateChange={(_s)=>{
                        console.log(_s)
                        set_state(_s)
                    }}/>
                    <SizedBox width="22px"/>
                </Box>
                
            </Box>
            {
                _state === 'more'? <Box sx={{
                    zIndex: 10,
                    background: `rgba(0,0,0,.8)`,
                    position: 'fixed',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <a style={{
                        height:71,
                        display: 'flex',
                        justifyContent: 'start',
                        textDecoration: 'none',
                    }} href="/">
                        <SizedBox width="30px"/>
                        <Text style={{
                            color: '#fff',
                            lineHeight: '71px',
                            textTransform: 'uppercase',
                        }}>Home</Text>
                    </a>

                    <a style={{
                        height:71,
                        display: 'flex',
                        justifyContent: 'start',
                        textDecoration: 'none',
                    }} href="/planet">
                        <SizedBox width="30px"/>
                        <Text style={{
                            color: '#fff',
                            lineHeight: '71px',
                            textTransform: 'uppercase',
                        }}>Planet</Text>
                    </a>

                    <a style={{
                        height:71,
                        display: 'flex',
                        justifyContent: 'start',
                        textDecoration: 'none',
                    }} href="/roadmap">
                        <SizedBox width="30px"/>
                        <Text style={{
                            color: '#fff',
                            lineHeight: '71px',
                            textTransform: 'uppercase',
                        }}>Roadmap</Text>
                    </a>
                    <Box sx={{
                            height: '71px',
                            margin: '0 30px',
                            backgroundSize: 'contain',
                        }} >
                            <Box sx={{
                                height: '36px',
                                borderBottom: 'solid 1px rgba(255,255,255,.3)'
                            }}></Box>
                        </Box>
                    <a style={{
                        height:71,
                        display: 'flex',
                        justifyContent: 'start',
                        textDecoration: 'none',
                    }} href="https://discord.gg/89USG2sytF"  target="_blank" rel="noreferrer">
                        <SizedBox width="30px"/>
                        <Box sx={{
                            width: '34px',
                            height: '71px',
                            background: `url(${discordIcon}) center no-repeat`,
                            backgroundSize: 'contain',
                            textIndent: '-9999px',
                        }} >discord</Box>
                        <SizedBox width="15px"/>
                        <Text style={{
                            color: '#fff',
                            lineHeight: '71px',
                            textTransform: 'uppercase',
                            }}>Discord</Text>
                    </a>
                    <a style={{
                        height:71,
                        display: 'flex',
                        justifyContent: 'start',
                        textDecoration: 'none',
                    }} href="https://twitter.com/DummyPuggyNFT"  target="_blank" rel="noreferrer">
                        <SizedBox width="30px"/>
                        <Box sx={{
                            width: '34px',
                            height: '71px',
                            background: `url(${twitterIcon}) center no-repeat`,
                            backgroundSize: 'contain',
                            textIndent: '-9999px',
                        }} >discord</Box>
                        <SizedBox width="15px"/>
                        <Text style={{
                            color: '#fff',
                            lineHeight: '71px',
                            textTransform: 'uppercase',
                        }}>Twitter</Text>
                    </a>
                    {/* <a style={{
                        height:71,
                        display: 'flex',
                        justifyContent: 'start',
                        textDecoration: 'none',
                    }} href="https://www.instagram.com/dummypuggy/"  target="_blank" rel="noreferrer">
                        <SizedBox width="30px"/>
                        <Box sx={{
                            width: '34px',
                            height: '71px',
                            background: `url(${insIcon}) center no-repeat`,
                            backgroundSize: 'contain',
                            textIndent: '-9999px',
                        }} >discord</Box>
                        <SizedBox width="15px"/>
                        <Text style={{
                            color: '#fff',
                            lineHeight: '71px',
                            textTransform: 'uppercase',
                        }}>instagram</Text>
                    </a> */}

                </Box>:<Box/>
            }
        </>
    )
}


const Header = ():JSX.Element=>{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
        {!matches? <MobileNav/>: <Box sx={{
                position: 'absolute',
                height: '90px',
                width: '100vw',
                backgroundColor: 'rgba(0, 0, 0, .3)',
                zIndex: 1,
            }}>
                <Box sx={{
                    maxWidth: '92vw',
                    margin: '0 auto',
                    display: 'flex',
                }}>
                    <h1 className="logo">DummyPuggy</h1>
                    <Expanded/>
                    <NavItem to={'/'} title="Home"/>
                    <SizedBox width="72px"/>
                    <NavItem to={'/planet'} title="Planet"/>
                    <SizedBox width="72px"/>
                    <NavItem to={'/roadmap'} title="Roadmap"/>
                    <SizedBox width="72px"/>
                    <a style={{
                        width: '34px',
                        height: '90px',
                        background: `url(${discordIcon}) center no-repeat`,
                        backgroundSize: 'contain',
                        textIndent: '-9999px',
                    }} href="https://discord.gg/89USG2sytF"  target="_blank" rel="noreferrer">discord</a>
                    <SizedBox width="24px"/>
                    <a style={{
                        width: '34px',
                        height: '90px',
                        background: `url(${twitterIcon}) center no-repeat`,
                        backgroundSize: 'contain',
                        textIndent: '-9999px',
                    }} href="https://twitter.com/DummyPuggyNFT"  target="_blank" rel="noreferrer">twitter</a>
                    <SizedBox width="20px"/>
                    {/* <SizedBox width="24px"/>
                    <a style={{
                        width: '34px',
                        height: '90px',
                        background: `url(${insIcon}) center no-repeat`,
                        backgroundSize: 'contain',
                        textIndent: '-9999px',
                    }} href="https://www.instagram.com/dummypuggy/"  target="_blank" rel="noreferrer">ins</a> */}
                </Box>
            </Box>}
            
        </>
    );
}

export default Header;