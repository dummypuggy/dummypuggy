import Box from "@mui/material/Box/Box";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import styled from "@mui/styles/styled";
import React, { useRef } from "react";
import { useState } from "react";

import { Expanded, SizedBox, Text, } from "../../components/base";

import bg2Image from '../../images/bg2.png'
import idx1Image from '../../images/idx1.png'
import idx2Image from '../../images/idx2.png'
import planetDiscord from '../../images/planetdiscord.png'
import planetTwitter from '../../images/planettwitter.png'


import planetM01 from '../../images/planetm01.png';
import planetM02 from '../../images/planetm02.png';
import planetM03 from '../../images/planetm03.png';

import pmd from '../../images/pmd.png';
import pmt from '../../images/pmt.png';
import pmi from '../../images/pmi.png';

import mobilebg from '../../images/mobilebg.png'

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
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '16px',
    fontFamily: 'MERegular',
    marginBottom: '20px',
};

type ContentProps = {
    ref?: React.Ref<unknown>,
}

const Tap0Content = (props: ContentProps):JSX.Element=>{
    const {ref} = props;
    // if(index !== 0){
    //     return <div/>
    // }
    return (
        <Box ref={ref} sx={{display: 'flex',
        minHeight: 'calc(100vh - 90px)',
        flexDirection: 'column',
        justifyContent: 'center',}}>

<Box sx={{
        }}>
            <h1><Text sx={{
                color: '#fff',
                fontSize: '60px',
            }}>ALL FOR POOPOO</Text></h1>

            <Box sx={textStyle}>
            In the year 2048, our digital lives worth more than our physical lives. AI becomes smarter than human. Everything goes digital.
            </Box>
            <Box sx={textStyle}>
            "Dummy Puggy" is a digital species created in the metaverse. They are extremely special.
            </Box>
            <Box sx={textStyle}>
            Their poopoos contain a spice that is super rare and priceless. Collecting poopoos can make a fortune!
            </Box>
            <Box sx={textStyle}>
            The puggies also have superpowers. They can teleport anywhere in the metaverse. When they come back. They will always bring you surprises!
            </Box>
        </Box>

        </Box>
        
    )
}

const Tap1Content = (props: ContentProps):JSX.Element=>{
    const {ref} = props;
    // if(index !== 1){
    //     return <div/>
    // }
    return (
        <Box ref={ref} sx={{display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',}}>
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
        </Box>
    )
}

const Tap2Content = (props: ContentProps):JSX.Element=>{
    const {ref} = props;
    // if(index !== 2){
    //     return <div/>
    // }
    return (
        <Box ref={ref} sx={{display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',}}>
        <Box sx={{
        }}>
            <h1><Text sx={{
                color: '#fff',
                fontSize: '60px',
                textTransform: 'uppercase',
            }}>POWER BY COMMUNITY</Text></h1>

            <Box sx={textStyle}>
            Puggy team dedicates to build a global community with all dummies together, which is Dummy Planet! 
            </Box>
            <Box sx={textStyle}>
            Dummy Planet integrates comic, art, game, and social elements into it. At present, the team is working on artist co-branding, online & offline activities, and games. 
            </Box>
            <Box sx={textStyle}>
            News will be continuously updated on Discord and Twitter.            </Box>
            <Box sx={{height: 50}}/>
            <img src={idx2Image} style={{maxWidth: '100%'}} alt="POWER BY COMMUNITY"/>
        </Box></Box>
    )
}

const Tap3Content = (props: ContentProps):JSX.Element=>{
    const {ref} = props;
    

    // myRef = React.createRef()

    // if(index !== 3){
    //     return <div/>
    // }
    return (
        <Box ref={ref} sx={{display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',}}>
        <Box sx={{
        }}>
            <h1><Text sx={{
                color: '#fff',
                fontSize: '60px',
                textTransform: 'uppercase',
            }}>Join crazy planet adventures</Text></h1>

            <Box sx={{height: 50}}/>
            <a href="https://discord.gg/89USG2sytF" target="_blank" rel="noreferrer"> <img src={planetDiscord} width={286} alt="discord" /></a>
            <SizedBox width="25px"/>
            <a href="https://twitter.com/DummyPuggyNFT" target="_blank" rel="noreferrer"> <img src={planetTwitter} width={286} alt="twitter" /></a>
        </Box>
        </Box>
    )
}



const PlanetPc = ():JSX.Element=>{
    
    const [idx, setIdx] = useState<tapState>(0)


    const scrollOuter = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     // document.title = `You clicked ${count} times`;
        
        
    //     // connectWallet().then((_r)=>console.log(_r))
        
    //     return function() {
    //       console.log('un mounted')
    //     }
    //   });


    return (
        <>
            <Box sx={{
                background: `url(${bg2Image}) bottom right no-repeat`,
                backgroundSize: '100vw 56.25vw',
                minHeight: '100vh',
                
                // paddingTop: '90px',
            }}>
                <Box sx={{
                    maxWidth: '92vw',
                    position: 'relative',
                    margin: '0 auto',
                }}>

                    <Box sx={{
                        position:'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        top: '90px',
                        left: '10px',
                        bottom: '0',
                        // transform: 'translateY(-220px)',
                        justifyContent: 'center',
                    }}>
                        <TapBtn isActive={idx === 0} onClick={()=>{
                            setIdx(0)
                            // cap1.current?.scrollIntoView()
                            scrollOuter.current?.scrollTo(0, 0)
                        }}/>
                        <SizedBox height={'30px'}/>
                        <TapBtn isActive={idx === 1} onClick={()=>{
                            setIdx(1)
                            scrollOuter.current?.scrollTo(0, scrollOuter.current?.offsetHeight)
                        }}/>
                        <SizedBox height={'30px'}/>
                        <TapBtn isActive={idx === 2} onClick={()=>{
                            setIdx(2)
                            scrollOuter.current?.scrollTo(0, scrollOuter.current?.offsetHeight * 2)
                        }}/>
                        <SizedBox height={'30px'}/>
                        <TapBtn isActive={idx === 3} onClick={()=>{
                            setIdx(3)
                            scrollOuter.current?.scrollTo(0, scrollOuter.current?.offsetHeight * 3)
                        }}/>
                    </Box>


                    <Box ref={scrollOuter} sx={{
                        padding: '90px 36vw 20px 100px',
                        paddingTop: '90px',
                        height: '100vh',
                        overflow: 'scroll',
                    }} onScroll={()=>{
                        const _top = scrollOuter?.current?.scrollTop ?? 0;
                        const _h = scrollOuter?.current?.offsetHeight ?? 0;
                        if(_top < _h){
                            setIdx(0)
                        } else if(_top >= _h * .6 && _top < _h * 1.6){
                            setIdx(1)
                        } else if(_top >= _h * 1.6 && _top < _h * 2.6){
                            setIdx(2)
                        } else {
                            setIdx(3)
                        }
                    }}>
                        <Tap0Content />
                        <Tap1Content />
                        <Tap2Content />
                        <Tap3Content />
                    </Box>
                    
                </Box>
                

            </Box>
        </>
    );
}

type idType = '01' | '02' | '03' | '04'

type TabMenuItemProps = {
    currentId?: idType,
    id: idType,
    onActive?: (id: idType)=>void,
}

const TabMenuItem = (props: TabMenuItemProps):JSX.Element=>{
    const {currentId, id, onActive} = props;
    const actived: boolean = currentId === id;
    const titles = {
        '01': 'All For Poopoo',
        '02': 'Team',
        '03': 'Power By community',
        '04': 'Join crazy planet adventures',  
    }
    return (
        <>
            <Box sx={{
                width: '20vw',
                height: '24vw',
                backgroundColor: `rgba(143,54,72,${actived? .67: .33 })`,
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer'
            }} onClick={()=>onActive && onActive(id)}>
                <Box sx={{
                    fontSize: '12px',
                    fontFamily: 'MEUltrabold',
                    color:actived ? '#93F825' : '#FA94AA' ,
                }}>{id}</Box>
                <Box sx={{
                    fontSize: '8px',
                    fontFamily: 'MELight',
                    color: '#fff',
                    lineHeight: '14px'
                }}>{titles[id]}</Box>
            </Box>
        </>
    );
}

type tebContentProps = {
    currentId?: idType,
}

const ContentP = styled(Box)({
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '16px',
    fontFamily: 'MERegular',
    marginBottom: '14px',
});

const TapContent01 = (props: tebContentProps):JSX.Element=>{
    const {currentId} = props;
    return (
        <>
            <Box sx={{
                display: currentId === '01' ? 'block' : 'none',
            }}>
                <Box sx={{
                    padding: '22px'
                }}>
                    <Box sx={{
                        fontFamily: 'MEUltrabold',
                        color: '#fff' ,
                        fontSize: '28px',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                    }}>All For Poopoo</Box>
                    <ContentP>
                    In the year 2048, our digital lives worth more than our physical lives. AI becomes smarter than human. Everything goes digital.
                    </ContentP>
                    <ContentP>
                    "Dummy Puggy" is a digital species created in the metaverse. They are extremely special.
                    </ContentP>
                    <ContentP>
                    Their poopoos contain a spice that is super rare and priceless. Collecting poopoos can make a fortune!
                    </ContentP>
                    <ContentP>
                    The puggies also have superpowers. They can teleport anywhere in the metaverse. When they come back. They will always bring you surprises!
                    </ContentP>
                    
                </Box>
                <img src={planetM01} alt="planet 01" style={{maxWidth: '100%'}} />
            </Box>
        </>
    );
}

const TapContent02 = (props: tebContentProps):JSX.Element=>{
    const {currentId} = props;
    return (
        <>
            <Box sx={{
                display: currentId === '02' ? 'block' : 'none',
            }}>
                <Box sx={{
                    padding: '22px'
                }}>
                    <Box sx={{
                        fontFamily: 'MEUltrabold',
                        color: '#fff' ,
                        fontSize: '28px',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                    }}>Team</Box>
                    <ContentP>
                    The Dummy Puggy team consists of 5 puggies. They live in a big kennel together in LA. Each contributes to their areas and hypes about the Dummy Puggy project
                    </ContentP>
                    <img src={planetM02} alt="planet 01" style={{maxWidth: '100%'}} />
                </Box>
                
            </Box>
        </>
    );
}

const TapContent03 = (props: tebContentProps):JSX.Element=>{
    const {currentId} = props;
    return (
        <>
            <Box sx={{
                display: currentId === '03' ? 'block' : 'none',
            }}>
                <Box sx={{
                    padding: '22px'
                }}>
                    <Box sx={{
                        fontFamily: 'MEUltrabold',
                        color: '#fff' ,
                        fontSize: '28px',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                    }}>Power By community</Box>
                    <ContentP>
                    Puggy team dedicates to build a global community with all dummies together, which is Dummy Planet! 
                    </ContentP>
                    <ContentP>
                    Dummy Planet integrates comic, art, game, and social elements into it. At present, the team is working on artist co-branding, online & offline activities, and games. 
                    </ContentP>
                    <ContentP>
                    News will be continuously updated on Discord and Twitter.
                    </ContentP>
                    
                </Box>
                <img src={planetM03} alt="planet 01" style={{maxWidth: '100%'}} />
            </Box>
        </>
    );
}

const TapContent04 = (props: tebContentProps):JSX.Element=>{
    const {currentId} = props;
    return (
        <>
            <Box sx={{
                display: currentId === '04' ? 'block' : 'none',
            }}>
                <Box sx={{
                    padding: '22px'
                }}>
                    <Box sx={{
                        fontFamily: 'MEUltrabold',
                        color: '#fff' ,
                        fontSize: '28px',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                    }}>Join crazy planet adventures</Box>
                    <ContentP>
                        <a href="https://discord.gg/89USG2sytF" target="_blank" rel="noreferrer">
                            <img src={pmd} alt="discord" style={{maxWidth: '100%'}} />
                        </a>
                    </ContentP>
                    <ContentP>
                        <a href="https://twitter.com/DummyPuggyNFT" target="_blank" rel="noreferrer">
                            <img src={pmt} alt="twitter" style={{maxWidth: '100%'}} />
                        </a>
                    </ContentP>
                    <ContentP>
                        <a href="https://www.instagram.com/dummypuggy/" target="_blank" rel="noreferrer">
                            <img src={pmi} alt="instagram" style={{maxWidth: '100%'}} />
                        </a>
                    </ContentP>
                </Box>
            </Box>
        </>
    );
}

const PlanetMobile = ():JSX.Element=>{
    const [currentId, setcurrentId] = useState<idType>('01');
    return (
        <>
            <Box sx={{
                paddingTop: '54px',
                background: `url(${mobilebg}) top center no-repeat`,
                backgroundSize:'cover',
            }}>
                <Box>
                    <TapContent01 currentId={currentId}/>
                    <TapContent02 currentId={currentId}/>
                    <TapContent03 currentId={currentId}/>
                    <TapContent04 currentId={currentId}/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '22px',
                }}>
                    <TabMenuItem id={'01'} currentId={currentId} onActive={(_id)=>setcurrentId(_id)}/>
                    <Expanded/>
                    <TabMenuItem id={'02'} currentId={currentId} onActive={(_id)=>setcurrentId(_id)}/>
                    <Expanded/>
                    <TabMenuItem id={'03'} currentId={currentId} onActive={(_id)=>setcurrentId(_id)}/>
                    <Expanded/>
                    <TabMenuItem id={'04'} currentId={currentId} onActive={(_id)=>setcurrentId(_id)}/>
                </Box>
            </Box>
        </>
    );
}

const Planet = ():JSX.Element=>{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <>
            
            {!matches? <PlanetMobile/>: <PlanetPc/>}
        </>
    );
}

export default Planet;