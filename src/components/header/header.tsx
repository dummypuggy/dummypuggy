import Box from "@mui/material/Box/Box";
import { useLocation, useNavigate } from "react-router-dom";
import { Expanded, SizedBox, Text } from "../base";

import discordIcon from '../../images/discord.png'
import twitterIcon from '../../images/twitter.png'
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


const Header = ():JSX.Element=>{

    return (
        <>
            <Box sx={{
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
            </Box>
        </>
    );
}

export default Header;