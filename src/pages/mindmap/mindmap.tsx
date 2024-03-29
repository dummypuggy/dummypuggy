import { Box, useMediaQuery } from "@mui/material";
import styled from "@mui/styles/styled/styled";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import { Expanded, SizedBox, Text } from "../../components/base";


import arrow from '../../images/arrow.svg'
import i01bg from '../../images/01bg.png'
import i02bg from '../../images/02bg.png'
import i04bg from '../../images/04bg.png'
import i05bg from '../../images/05bg.png'

import modal01 from '../../images/modal01.png'
import modal02 from '../../images/modal02.png'
import modal03 from '../../images/modal03.png'
import modal04img from '../../images/modal04.png'
import modal04 from '../../images/modal04.mp4'
import modal05 from '../../images/modal05.png'
import modal06 from '../../images/modal06.png'
import close from '../../images/close.png'


import rmc01 from '../../images/rmc01.png'
import rmc02 from '../../images/rmc02.png'
import rmc03 from '../../images/rmc03.png'
import rmc04 from '../../images/rmc04.png'
import rmc05 from '../../images/rmc05.png'
import rmc06 from '../../images/rmc06.png'

import rmcm01 from '../../images/rmcm01.png'
import rmcm02 from '../../images/rmcm02.png'
import rmcm03 from '../../images/rmcm03.png'
import rmcm04 from '../../images/rmcm04.png'
import rmcm05 from '../../images/rmcm05.png'
import rmcm06 from '../../images/rmcm06.png'

import mobilebg from '../../images/mobilebg.png'

const emptyImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

export const MindRow = styled(Box)({
    width: '22.2vw',
    padding: 0,
    margin: '0 auto',
    height: '100%',
    // border: 'solid #fff 1px',
});

type Id = '01' | '02' | '03' | '04' | '05' | '06' | undefined;

type TikCardProps = {
    id: Id,
    title: string,
    onClicked?: (id: Id)=>void,
}

const TikCard = (props: TikCardProps):JSX.Element=>{
    const [hoverState, sethoverState] = useState<boolean>(false);
    const  {
        id,
        title,
        onClicked,
    }= props

    const bgs = {
        '01': i01bg,
        '02': i02bg,
        '03': emptyImage,
        '04': i04bg,
        '05': i05bg,
        '06': emptyImage,
    }
    return (
        <>
            <Box sx={{
                width: '100%',
                height: '100%',
                borderRadius: '15px',
                background: `#8F3648 url(${bgs[id ?? '01'] as string}) right bottom no-repeat`,
                backgroundSize: 'contain',
                padding: id === '03' ? '1.56vw 0vw 1.56vw 1.56vw' : '1.56vw 8vw 1.56vw 1.56vw',
                opacity: hoverState? 1: 0.5,
                cursor: 'pointer',
                
            }} onMouseEnter={()=>sethoverState(true)} onMouseLeave={()=>sethoverState(false)} onClick={()=>onClicked && onClicked(id ?? '01')}>
                <Box sx={{
                    fontSize: '3.125vw',
                    fontFamily: 'Monument Extended',
                    color:hoverState ? '#93F825' : '#FA94AA' ,
                    fontVariationSettings: `'wght' 675`,
                    fontWeight: 675,
                    fontStyle: 'normal',
                }}>
                    {id}
                </Box>

                <Box sx={{
                    fontSize: '1.5625vw',
                    fontFamily: 'MEUltrabold',
                    color: '#fff',
                }}>
                    {title}
                </Box>
                <Box sx={{
                    fontSize: '30px',
                    display: hoverState ? 'block' : 'none',
                }}>
                    <img src={arrow} alt="arrow" />
                </Box>

            </Box>
        </>
    )
}


// const Modal = (props: ModalProps):JSX.Element=>{
//     const {children} = props;
//     return (
//         <>
//             <Box sx={{
//                 position: "fixed",
//                 inset: 0,
//                 top: '386px',
//                 backgroundColor: '#f00',
//             }}>
//                 {children}
//             </Box>
//         </>
//     )
// }

const Modal = styled(Box)({
    position: "fixed",
    top: '248px',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    overflow:'auto',
    paddingTop: '50px',
    background: `#8f3648 url(${emptyImage}) right bottom no-repeat`,
});

const ModalP = styled(Box)({
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '16px',
    fontFamily: 'MERegular',
    marginBottom: '30px',
    // fontFamily: 'Monument Extended',
    //                 fontVariationSettings: `'wght' 350`,
    //                 fontWeight: 350,
    //                 fontStyle: 'normal',
});

type ModalProps = {
    showId: Id,
    onClosed?: React.MouseEventHandler<HTMLImageElement>
}

const Modal01 = (props: ModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Box sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9,
                backgroundColor: '#00000008',
                display: showId === '01' ? 'block' : 'none',
            }} onClick={onClosed}></Box>
            <Modal className="slideInUp" style={{
               
                display: showId === '01' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 34,
                    height: 34,
                    position: 'fixed',
                    right: '20px',
                    top: '268px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    width: '100vw',
                    paddingLeft: '4vw',
                    display: 'flex',
                }}>
                    <Expanded>
                    <Box sx={{
                        fontSize: '60px',
                        fontFamily: 'Monument Extended',
                        color: '#93F825',
                        fontVariationSettings: `'wght' 675`,
                        fontWeight: 675,
                        fontStyle: 'normal',
                        display: 'inline-block'
                    }}>01</Box>
                    <SizedBox width="20px"/>
                    <Box sx={{
                        fontSize: '40px',
                        fontFamily: 'Monument Extended',
                        color: '#fff',
                        fontVariationSettings: `'wght' 675`,
                        fontWeight: 675,
                        fontStyle: 'normal',
                        display: 'inline-block'
                    }}>Genesis Puggy NFT</Box>
                    <Box sx={{height:'20px'}}/>
                    <ModalP sx={{width: '38vw'}}>
                    Unique Puggies have been generated programmatically from 280 attributes across 10 categories; Ultra Puggies adds more 9 special backgrounds on this basis. Legendary puggies are one-of-one. All of them are hand-painted by the artist, including graffiti artists, visual artists, music creators, gamers, and animators. Please join Discord to check out detailed launch information.
                    </ModalP>
                    <ModalP sx={{width: '38vw'}}>
                    At the meantime, Dummy NFTs are already in production. Some of Dummy NFTs will be airdropped to Ultra puggy holders when Dummy NFTs go on sale (The expected to be released in March). Users who hold Legendary Puggies will be given priority to experience and receive Land NFT airdrops when Planet goes online.
                    </ModalP>
                    </Expanded>
                    <Box>
                        <img src={modal01} alt="" height={'auto'} width={'100%'} />
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

const Modal02 = (props: ModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Box sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9,
                backgroundColor: '#00000008',
                display: showId === '02' ? 'block' : 'none',
            }} onClick={onClosed}></Box>
            <Modal className="slideInUp" style={{
                display: showId === '02' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 34,
                    height: 34,
                    position: 'fixed',
                    right: '20px',
                    top: '268px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                     width: '100vw',
                     paddingLeft: '4vw',
                     display: 'flex',
                }}>
                    <Expanded>
                    <Box sx={{
                        fontSize: '60px',
                        fontFamily: 'Monument Extended',
                        color: '#93F825',
                        fontVariationSettings: `'wght' 675`,
                        fontWeight: 675,
                        fontStyle: 'normal',
                        display: 'inline-block'
                    }}>02</Box>
                    <SizedBox width="20px"/>
                    <Box sx={{
                        fontSize: '40px',
                        fontFamily: 'Monument Extended',
                        color: '#fff',
                        fontVariationSettings: `'wght' 675`,
                        fontWeight: 675,
                        fontStyle: 'normal',
                        display: 'inline-block'
                    }}>Dummy NFT</Box>
                    <Box sx={{height:'20px'}}/>
                    <ModalP sx={{width: '56vw'}}>
                    Dummy planet is an open social metaverse. Puggies are our passports and Dummy NFTs are our digital identities.
                    </ModalP>
                    <ModalP sx={{width: '56vw'}}>
                    Dummy NFT is different from Puggy NFT and other NFTs that are randomly generated by machines. It will be created in the form of a body and random matching accessories. Dummy NFTs are in production and there are 14 parts and 280 accessories to choose from. The rarity of each accessory is different. 
                    </ModalP>
                    <ModalP sx={{width: '56vw'}}>
                    As probability cannot be used to control the rarity, we will introduce a liquid token called PPC (Poo Poo Coin) to Dummy Planet. The rarer the accessory, the higher the PPC price. Besides, the quantity of each accessory is limited.
                    </ModalP>
                    </Expanded>
                    <Box>
                        <img src={modal02} alt="" height={'auto'} width={'100%'} />
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

const Modal03 = (props: ModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Box sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9,
                backgroundColor: '#00000008',
                display: showId === '03' ? 'block' : 'none',
            }} onClick={onClosed}></Box>
            <Modal className="slideInUp" style={{
                display: showId === '03' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 34,
                    height: 34,
                    position: 'fixed',
                    right: '20px',
                    top: '268px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    width: '100vw',
                    paddingLeft: '4vw',
                    display: 'flex',
                }}>
                    <Expanded>
                    <Box sx={{
                        fontSize: '60px',
                        fontFamily: 'Monument Extended',
                        color: '#93F825',
                        fontVariationSettings: `'wght' 675`,
                        fontWeight: 675,
                        fontStyle: 'normal',
                        display: 'inline-block'
                    }}>03</Box>
                    <SizedBox width="20px"/>
                    <Box sx={{
                        fontSize: '40px',
                        fontFamily: 'Monument Extended',
                        color: '#fff',
                        fontVariationSettings: `'wght' 675`,
                        fontWeight: 675,
                        fontStyle: 'normal',
                        display: 'inline-block'
                    }}>GameFi & $PPC</Box>
                    <Box sx={{height:'20px'}}/>
                    <ModalP sx={{width: '60vw'}}>
                    The sale of Dummy NFTs and accessories is the first application scenario of PPC, and there are many other PPC application scenarios in Dummy Planet.
                    </ModalP>
                    <ModalP sx={{width: '60vw'}}>
                    Airdrops are not a good solution to the continuous demand for PPC, so we combine GameFi and Puggy. Puggy generates Poopoos, and Poopoos are exchanged for PPC (Poopoos Coin). The rarity of a puggy corresponds to an in-game attribute. For GameFi, we will discuss with the community to add more interesting elements, so that in addition to generating PPC, it can also bring joy to everyone.
                    </ModalP>
                    <ModalP sx={{width: '60vw'}}>
                    A demo of the GameFi version was released before. Although the game has been made, we are not very satisfied with the version. Therefore we start again and work with the community to make a new GameFi version that belongs to each of us.                    
                    </ModalP>
                    </Expanded>
                    <Box>
                        <img src={modal03} alt="" height={'auto'} width={'100%'}/>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

const Modal04 = (props: ModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Box sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9,
                backgroundColor: '#00000008',
                display: showId === '04' ? 'block' : 'none',
            }} onClick={onClosed}></Box>
            <Modal className="slideInUp" style={{
                // backgroundImage: `url(${modal04})`,
                // backgroundSize: 'contain',
                display: showId === '04' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 34,
                    height: 34,
                    position: 'fixed',
                    right: '20px',
                    top: '268px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    width: '100vw',
                    paddingLeft: '4vw',
                    display: 'flex',
                }}>
                    <Expanded>
                    <Box sx={{
                        fontSize: '60px',
                        fontFamily: 'Monument Extended',
                        color: '#93F825',
                        fontVariationSettings: `'wght' 675`,
                        fontWeight: 675,
                        fontStyle: 'normal',
                        display: 'inline-block'
                    }}>04</Box>
                    <SizedBox width="20px"/>
                    <Box sx={{
                        fontSize: '40px',
                        fontFamily: 'Monument Extended',
                        color: '#fff',
                        fontVariationSettings: `'wght' 675`,
                        fontWeight: 675,
                        fontStyle: 'normal',
                        display: 'inline-block'
                    }}>Dummy Planet</Box>
                    <Box sx={{height:'20px'}}/>
                    <ModalP sx={{width: '38vw'}}>
                    Dummy Planet is an open social metaverse. 
                    </ModalP>
                    <ModalP sx={{width: '38vw'}}>
                    On this planet, Dummy NFTs is your digital identity, and Puggies are your guides in the world. We can interact with other dummies and communicate by voice. We can have our own decorated houses and invite others to visit our homes. We can have real neighbors. We can not only communicate within the game but also become friends outside the game. Apart from houses, we can run or visit commercial buildings. 
                    </ModalP>
                    <ModalP sx={{width: '38vw'}}>
                    Currently, we are communicating with some DJs. And we will run Puggy Club after Dummy Planet goes online. This is a club where everyone can bring their Puggies with them. We can listen to music, dance, and give rewards here. Of course, we are also preparing to build graffiti walls, trend shops, etc.
                    </ModalP>
                    </Expanded>
                    <Box sx={{
                        width: '50vw',
                        background: `url(${modal04img}) top right no-repeat`,
                        backgroundSize: '50vw auto',
                        height: '27vw',
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            width: '39.2vw',
                            height: '22.2vw',
                            right: '6.1vw',
                            top: 'calc(3.3vw + 50px)',
                            borderRadius: '3vw',
                            overflow: 'hidden',
                        }}>
                            <video  preload="auto" loop muted playsInline autoPlay style={{
                                height: '100%',
                                width: '100%',
                            }}>
                                <source src={modal04} type="video/mp4" />
                            </video>
                        </Box>
                    {/* <video  preload="auto" loop muted playsInline autoPlay style={{
                        height: '100%',
                        width: '100%',
                    }}>
                    <source src={modal04} type="video/mp4" />
                    </video> */}
                    </Box>
                    
                </Box>
            </Modal>
        </>
    )
}

const Modal05 = (props: ModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Box sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9,
                backgroundColor: '#00000008',
                display: showId === '05' ? 'block' : 'none',
            }} onClick={onClosed}></Box>
            <Modal className="slideInUp" style={{
                display: showId === '05' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 34,
                    height: 34,
                    position: 'fixed',
                    right: '20px',
                    top: '268px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    width: '100vw',
                    paddingLeft: '4vw',
                    // margin: '0 auto',
                    
                    // paddingTop: '30px',
                    display: 'flex',
                }}>
                    <Expanded>
                    <Box sx={{
                        fontSize: '60px',
                        fontFamily: 'Monument Extended',
                        color: '#93F825',
                        fontVariationSettings: `'wght' 675`,
                        fontWeight: 675,
                        fontStyle: 'normal',
                        display: 'inline-block'
                    }}>05</Box>
                    <SizedBox width="20px"/>
                    <Box sx={{
                        fontSize: '40px',
                        fontFamily: 'Monument Extended',
                        color: '#fff',
                        fontVariationSettings: `'wght' 675`,
                        fontWeight: 675,
                        fontStyle: 'normal',
                        display: 'inline-block'
                    }}>Dummy Culture</Box>
                    <Box sx={{height:'20px'}}/>
                    <ModalP >
                    Dummy planet is not just a virtual world, and it is also connected to our real world.
                    </ModalP>
                    <ModalP >
                    Dummy culture will become a community-driven cultural trend. It will cooperate with trendy brands, regularly release Dummy peripheral products, and open offline clubs. The value generated by Dummy culture will be shared with ecological participants including NFT holders, token holders, etc.                    
                    </ModalP>
                    </Expanded>
                    <Box>
                        <img style={{marginTop: '-52px'}} src={modal05} alt="" height={'auto'}/>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

const Modal06 = (props: ModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Box sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9,
                backgroundColor: '#00000008',
                display: showId === '06' ? 'block' : 'none',
            }} onClick={onClosed}></Box>
            <Modal className="slideInUp" style={{
                display: showId === '06' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 34,
                    height: 34,
                    position: 'fixed',
                    right: '20px',
                    top: '268px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                     width: '100vw',
                     paddingLeft: '4vw',
                     display: 'flex',
                }}>
                    <Expanded>
                    <Box sx={{
                        fontSize: '60px',
                        fontFamily: 'Monument Extended',
                        color: '#93F825',
                        fontVariationSettings: `'wght' 675`,
                        fontWeight: 675,
                        fontStyle: 'normal',
                        display: 'inline-block'
                    }}>06</Box>
                    <SizedBox width="20px"/>
                    <Box sx={{
                        fontSize: '40px',
                        fontFamily: 'Monument Extended',
                        color: '#fff',
                        fontVariationSettings: `'wght' 675`,
                        fontWeight: 675,
                        fontStyle: 'normal',
                        display: 'inline-block'
                    }}>DAO & $DUMMY</Box>
                    <Box sx={{height:'20px'}}/>
                    <ModalP sx={{width: '38vw'}}>
                    Dummy Puggy is a community-driven project. The project party only acts as the initiator and promoter and Dummy DAO is the final form of Dummy Puggy Project.
                    </ModalP>
                    <ModalP sx={{width: '38vw'}}>
                    50% of the proceeds from the NFT sale will be put into Dummy's treasury.
                    </ModalP>
                    <ModalP sx={{width: '38vw'}}>
                    The value generated by Dummy culture will be shared with ecological participants.
                    </ModalP>
                    <ModalP sx={{width: '38vw'}}>
                    The project party will airdrop governance tokens named DUMMY to NFT holders at the right time to exercise voting rights.
                    </ModalP>
                    </Expanded>
                    <Box>
                        <img src={modal06} height={'auto'} alt="" width={'100%'} />
                    </Box>
                </Box>
            </Modal>
        </>
    )
}


const MindMapPc = ():JSX.Element=>{
    const [currentId, setCurrentId] = useState<Id>(undefined);
    return (
        <>
            <Modal01 showId={currentId} onClosed={()=>setCurrentId(undefined)}/>
            <Modal02 showId={currentId} onClosed={()=>setCurrentId(undefined)}/>
            <Modal03 showId={currentId} onClosed={()=>setCurrentId(undefined)}/>
            <Modal04 showId={currentId} onClosed={()=>setCurrentId(undefined)}/>
            <Modal05 showId={currentId} onClosed={()=>setCurrentId(undefined)}/>
            <Modal06 showId={currentId} onClosed={()=>setCurrentId(undefined)}/>

            <Box sx={{
                paddingTop: '152px',
            }}>
                <Box sx={{
                    maxWidth: '92vw',
                    margin: '0 auto',
                    // display: 'flex',
                }}>
                    <h2 style={{margin: 0}}><Text style={{textTransform: 'uppercase', fontSize: '60px', color: '#fff', letterSpacing: '5px'}}>roadmap</Text></h2>
                    <Box sx={{
                        fontSize: '24px',
                        color: '#fff',
                        fontFamily: 'MERegular',
                    }}>
                    ”Dummy Puggy“ is the Digital Species created in the Metaverse. 
                    </Box>
                    <Box sx={{
                        fontSize: '24px',
                        color: '#fff',
                        fontFamily: 'MERegular',
                    }}>
                    they are extremely special.
                    </Box>
                    <SizedBox height="66px"></SizedBox>
                    <Box sx={{
                        width: '92w',
                        height: '30.3125vw',
                        // border: 'solid #fff 1px',
                        display: 'flex',
                    }}>
                        <MindRow>
                            <TikCard id="01" title="Puggy NFT" onClicked={(_id)=>setCurrentId(_id)}/>
                        </MindRow>
                        <Expanded/>
                        <MindRow style={{
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                            <Box sx={{
                                // border: 'solid #fff 1px',
                                height: '17.65625vw',
                            }}>
                                <TikCard id="02" title="Dummy NFT" onClicked={(_id)=>setCurrentId(_id)}/>
                            </Box>
                            <Expanded/>
                            <Box sx={{
                                // border: 'solid #fff 1px',
                                height: '11.40625vw',
                            }}>
                                <TikCard id="03" title="Gamefi & $PPC" onClicked={(_id)=>setCurrentId(_id)}/>
                            </Box>
                        </MindRow>
                        <Expanded/>
                        <MindRow>
                            <TikCard id="04" title="Dummy Planet" onClicked={(_id)=>setCurrentId(_id)}/>
                        </MindRow>
                        <Expanded/>
                        <MindRow style={{
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                        <Box sx={{
                                // border: 'solid #fff 1px',
                                height: '15.4vw',
                            }}>
                                <TikCard id="05" title="Dummy Culture" onClicked={(_id)=>setCurrentId(_id)}/>
                            </Box>
                            <Expanded/>
                            <Box sx={{
                                // border: 'solid #fff 1px',
                                height: '13.7vw',
                            }}>
                                <TikCard id="06" title="DAO & $DUMMY" onClicked={(_id)=>setCurrentId(_id)}/>
                            </Box>
                        </MindRow>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

const ContentP = styled(Box)({
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '16px',
    fontFamily: 'MERegular',
    marginBottom: '10px',
});

type TikCardMobileProps = {
    id: Id,
    onClicked?: (id: Id)=>void,
}

const TikCardModile = (props: TikCardMobileProps):JSX.Element=>{
    const {id, onClicked,} = props;
    const bgs = {
        '01': rmc01,
        '02': rmc02,
        '03': rmc03,
        '04': rmc04,
        '05': rmc05,
        '06': rmc06,
    }

    return (
        <>
            <Box onClick={()=>onClicked && onClicked(id)}>
                <img src={bgs[id || '01']} style={{
                    maxWidth: '100%',
                    height: 'auto',
                }} alt="" />
            </Box>
        </>
    );
}

const MobileModal = styled(Box)({
    position: "fixed",
    top: '118px',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    overflow:'auto',
    paddingTop: '0px',
    backgroundColor: '#8F364888',
    overflowX: 'hidden',
});

const MobileModalP = styled(Box)({
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '12px',
    fontFamily: 'MERegular',
    marginBottom: '30px',
    // fontFamily: 'Monument Extended',
    //                 fontVariationSettings: `'wght' 350`,
    //                 fontWeight: 350,
    //                 fontStyle: 'normal',
});

type MobileModalProps = {
    showId: Id,
    onClosed?: React.MouseEventHandler<HTMLImageElement>
}

const MobileModal01 = (props: MobileModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Box sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9,
                backgroundColor: '#00000008',
                display: showId === '01' ? 'block' : 'none',
            }} onClick={onClosed}></Box>
            <MobileModal className="slideInUp" style={{
               
                display: showId === '01' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 20,
                    height: 20,
                    position: 'fixed',
                    right: '20px',
                    top: '128px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    width: '100vw',
                    padding: '4vw',
                }}>
                    
                    <Box sx={{
                        fontSize: '32px',
                        fontFamily: 'MEUltrabold',
                        color: '#93F825',
                    }}>01</Box>
                    <Box sx={{
                        fontSize: '16px',
                        fontFamily: 'MEUltrabold',
                        color: '#fff',
                    }}>Genesis Puggy NFT</Box>
                    <Box sx={{height:'20px'}}/>
                    <MobileModalP>
                    Dummy Puggy is the Digital Species created in the Metaverse. Puggies are extremely special, they only have 9,999. They are currently being divided into 3 levels: Unique puggy (9,000), Ultra puggy (900), and Legendary puggy (99).
                    </MobileModalP>
                    <MobileModalP>
                    Unique Puggies have been generated programmatically from 280 attributes across 10 categories; Ultra Puggies adds more 9 special backgrounds on this basis. Legendary puggies are one-of-one. All of them are hand-painted by the artist, including graffiti artists, visual artists, music creators, gamers, and animators. Please join Discord to check out detailed launch information.
                    </MobileModalP>
                    <MobileModalP>
                    At the meantime, Dummy NFTs are already in production. Some of Dummy NFTs will be airdropped to Ultra puggy holders when Dummy NFTs go on sale (The expected to be released in March). Users who hold Legendary Puggies will be given priority to experience and receive Land NFT airdrops when Planet goes online.                    </MobileModalP>
                    <Box>
                        <img src={rmcm01} alt="" height={'auto'} width={'100%'} />
                    </Box>
                </Box>
            </MobileModal>
        </>
    )
}

const MobileModal02 = (props: MobileModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    // console.log(showId)
    return (
        <>
            <Box sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9,
                backgroundColor: '#00000008',
                display: showId === '02' ? 'block' : 'none',
            }} onClick={onClosed}></Box>
            <MobileModal className="slideInUp" style={{
               
                display: showId === '02' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 20,
                    height: 20,
                    position: 'fixed',
                    right: '20px',
                    top: '128px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    width: '100vw',
                    padding: '4vw',
                }}>
                    
                    <Box sx={{
                        fontSize: '32px',
                        fontFamily: 'MEUltrabold',
                        color: '#93F825',
                    }}>02</Box>
                    <Box sx={{
                        fontSize: '16px',
                        fontFamily: 'MEUltrabold',
                        color: '#fff',
                    }}>Dummy NFT</Box>
                    <Box sx={{height:'20px'}}/>
                    <MobileModalP>
                    Dummy planet is an open social metaverse. Puggies are our passports and Dummy NFTs are our digital identities.
                    </MobileModalP>
                    <MobileModalP>
                    Dummy NFT is different from Puggy NFT and other NFTs that are randomly generated by machines. It will be created in the form of a body and random matching accessories. Dummy NFTs are in production and there are 14 parts and 280 accessories to choose from. The rarity of each accessory is different. 
                    </MobileModalP>
                    <MobileModalP>
                    As probability cannot be used to control the rarity, we will introduce a liquid token called PPC (Poo Poo Coin) to Dummy Planet. The rarer the accessory, the higher the PPC price. Besides, the quantity of each accessory is limited.
                    </MobileModalP>
                    <Box>
                        
                    </Box>
                </Box>
                <img src={rmcm02} alt="" height={'auto'} width={'100%'} />
            </MobileModal>
        </>
    )
}

const MobileModal03 = (props: MobileModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Box sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9,
                backgroundColor: '#00000008',
                display: showId === '03' ? 'block' : 'none',
            }} onClick={onClosed}></Box>
            <MobileModal className="slideInUp" style={{
               
                display: showId === '03' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 20,
                    height: 20,
                    position: 'fixed',
                    right: '20px',
                    top: '128px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    width: '100vw',
                    padding: '4vw',
                }}>
                    
                    <Box sx={{
                        fontSize: '32px',
                        fontFamily: 'MEUltrabold',
                        color: '#93F825',
                    }}>03</Box>
                    <Box sx={{
                        fontSize: '16px',
                        fontFamily: 'MEUltrabold',
                        color: '#fff',
                    }}>GameFi & $PPC</Box>
                    <Box sx={{height:'20px'}}/>
                    <MobileModalP>
                    The sale of Dummy NFTs and accessories is the first application scenario of PPC, and there are many other PPC application scenarios in Dummy Planet.
                    </MobileModalP>
                    <MobileModalP>
                    Airdrops are not a good solution to the continuous demand for PPC, so we combine GameFi and Puggy. Puggy generates Poopoos, and Poopoos are exchanged for PPC (Poopoos Coin). The rarity of a puggy corresponds to an in-game attribute. For GameFi, we will discuss with the community to add more interesting elements, so that in addition to generating PPC, it can also bring joy to everyone.
                    </MobileModalP>
                    <MobileModalP>
                    A demo of the GameFi version was released before. Although the game has been made, we are not very satisfied with the version. Therefore we start again and work with the community to make a new GameFi version that belongs to each of us.
                    </MobileModalP>
                    <Box>
                        <img src={rmcm03} alt="" height={'auto'} width={'100%'} />
                    </Box>
                </Box>
            </MobileModal>
        </>
    )
}

const MobileModal04 = (props: MobileModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Box sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9,
                backgroundColor: '#00000008',
                display: showId === '04' ? 'block' : 'none',
            }} onClick={onClosed}></Box>
            <MobileModal className="slideInUp" style={{
               
                display: showId === '04' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 20,
                    height: 20,
                    position: 'fixed',
                    right: '20px',
                    top: '128px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    width: '100vw',
                    padding: '4vw',
                }}>
                    
                    <Box sx={{
                        fontSize: '32px',
                        fontFamily: 'MEUltrabold',
                        color: '#93F825',
                    }}>04</Box>
                    <Box sx={{
                        fontSize: '16px',
                        fontFamily: 'MEUltrabold',
                        color: '#fff',
                    }}>Dummy Planet</Box>
                    <Box sx={{height:'20px'}}/>
                    <MobileModalP>
                    Dummy Planet is an open social metaverse. 
                    </MobileModalP>
                    <MobileModalP>
                    On this planet, Dummy NFTs is your digital identity, and Puggies are your guides in the world. We can interact with other dummies and communicate by voice. We can have our own decorated houses and invite others to visit our homes. We can have real neighbors. We can not only communicate within the game but also become friends outside the game. Apart from houses, we can run or visit commercial buildings. 
                    </MobileModalP>
                    <MobileModalP>
                    On this planet, Dummy NFTs is your digital identity, and Puggies are your guides in the world. We can interact with other dummies and communicate by voice. We can have our own decorated houses and invite others to visit our homes. We can have real neighbors. We can not only communicate within the game but also become friends outside the game. Apart from houses, we can run or visit commercial buildings. 
                    </MobileModalP>
                </Box>
                <img src={rmcm04} alt="" height={'auto'} width={'100%'} />
            </MobileModal>
        </>
    )
}

const MobileModal05 = (props: MobileModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Box sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9,
                backgroundColor: '#00000008',
                display: showId === '05' ? 'block' : 'none',
            }} onClick={onClosed}></Box>
            <MobileModal className="slideInUp" style={{
               
                display: showId === '05' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 20,
                    height: 20,
                    position: 'fixed',
                    right: '20px',
                    top: '128px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    width: '100vw',
                    padding: '4vw',
                }}>
                    
                    <Box sx={{
                        fontSize: '32px',
                        fontFamily: 'MEUltrabold',
                        color: '#93F825',
                    }}>05</Box>
                    <Box sx={{
                        fontSize: '16px',
                        color: '#fff',
                        fontFamily: 'MEUltrabold',
                    }}>Dummy Culture</Box>
                    <Box sx={{height:'20px'}}/>
                    <MobileModalP>
                    Dummy planet is not just a virtual world, and it is also connected to our real world.
                    </MobileModalP>
                    <MobileModalP>
                    Dummy culture will become a community-driven cultural trend. It will cooperate with trendy brands, regularly release Dummy peripheral products, and open offline clubs. The value generated by Dummy culture will be shared with ecological participants including NFT holders, token holders, etc.
                    </MobileModalP>
                </Box>
                <Box sx={{backgroundColor: 'rgb(85,36,59)'}}>
                <img src={rmcm05} alt="" height={'auto'} width={'100%'} />
                </Box>
            </MobileModal>
        </>
    )
}

const MobileModal06 = (props: MobileModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Box sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 9,
                backgroundColor: '#00000008',
                display: showId === '06' ? 'block' : 'none',
            }} onClick={onClosed}></Box>
            <MobileModal className="slideInUp" style={{
               
                display: showId === '06' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 20,
                    height: 20,
                    position: 'fixed',
                    right: '20px',
                    top: '128px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    width: '100vw',
                    padding: '4vw',
                }}>
                    
                    <Box sx={{
                        fontSize: '32px',
                        fontFamily: 'MEUltrabold',
                        color: '#93F825',
                        width: '100vw',
                    }}>06</Box>
                    <Box sx={{
                        fontSize: '16px',
                        fontFamily: 'MEUltrabold',
                        color: '#fff',
                    }}>DAO & $DUMMY</Box>
                    <Box sx={{height:'20px'}}/>
                    <MobileModalP>
                    Dummy Puggy is a community-driven project. The project party only acts as the initiator and promoter and Dummy DAO is the final form of Dummy Puggy Project.
                    </MobileModalP>
                    <MobileModalP>
                    50% of the proceeds from the NFT sale will be put into Dummy's treasury.
                    </MobileModalP>
                    <MobileModalP>
                    The value generated by Dummy culture will be shared with ecological participants.
                    </MobileModalP>
                    <MobileModalP>
                    The project party will airdrop governance tokens named DUMMY to NFT holders at the right time to exercise voting rights.                    
                    </MobileModalP>
                </Box>
                <img src={rmcm06} alt="" height={'auto'} width={'100%'} />
            </MobileModal>
        </>
    )
}
// type MindMapMobileProps = {
//     id: 
// }

const MindMapMobile = ():JSX.Element=>{
    const [currentId, setCurrentId] = useState<Id>(undefined);
    
    return (
        <>
            <MobileModal01 showId={currentId} onClosed={()=>setCurrentId(undefined)}/>
            <MobileModal02 showId={currentId} onClosed={()=>setCurrentId(undefined)}/>
            <MobileModal03 showId={currentId} onClosed={()=>setCurrentId(undefined)}/>
            <MobileModal04 showId={currentId} onClosed={()=>setCurrentId(undefined)}/>
            <MobileModal05 showId={currentId} onClosed={()=>setCurrentId(undefined)}/>
            <MobileModal06 showId={currentId} onClosed={()=>setCurrentId(undefined)}/>
            {/*  */}
            <Box sx={{
                padding: '76px 22px 22px 22px',
                background: `url(${mobilebg}) top center no-repeat`,
                backgroundSize:'cover',
                minHeight: '100vh'
            }}>
                <Box sx={{
                    fontFamily: 'MEUltrabold',
                    color: '#fff' ,
                    fontSize: '28px',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                }}>RoadMap</Box>
                <ContentP sx={{
                    display: !currentId ? 'block' : 'none',
                }}>
                ”Dummy Puggy“ is the Digital Species created in the Metaverse. 
                </ContentP>
                <Box
                sx={{
                    gap: 2,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    display: !currentId ? 'grid' : 'none',
                }}
                >
                    <TikCardModile id="01" onClicked={(_id)=>setCurrentId(_id)}/>
                    <TikCardModile id="02" onClicked={(_id)=>setCurrentId(_id)}/>
                    <TikCardModile id="03" onClicked={(_id)=>setCurrentId(_id)}/>
                    <TikCardModile id="04" onClicked={(_id)=>setCurrentId(_id)}/>
                    <TikCardModile id="05" onClicked={(_id)=>setCurrentId(_id)}/>
                    <TikCardModile id="06" onClicked={(_id)=>setCurrentId(_id)}/>
                </Box>
            </Box>
        </>
    );
}

const MindMap = ():JSX.Element=>{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <>
            
            {!matches? <MindMapMobile/>: <MindMapPc/>}
        </>
    );
}

export default MindMap;