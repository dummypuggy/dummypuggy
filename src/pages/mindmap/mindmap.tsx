import { Box } from "@mui/material";
import styled from "@mui/styles/styled/styled";
import { useState } from "react";

import { Expanded, SizedBox, Text } from "../../components/base";


import arrow from '../../images/arrow.svg'
import i01bg from '../../images/01bg.png'
import i02bg from '../../images/02bg.png'
import i04bg from '../../images/04bg.png'
import i05bg from '../../images/05bg.png'

import modal01 from '../../images/modal01.png'
import modal02 from '../../images/modal02.png'
import modal03 from '../../images/modal03.png'
import modal04 from '../../images/modal04.png'
import modal05 from '../../images/modal05.png'
import modal06 from '../../images/modal06.png'
import close from '../../images/close.png'


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
                padding: id === '03' ? '1.56vw 5vw 1.56vw 1.56vw' : '1.56vw 8vw 1.56vw 1.56vw',
                opacity: hoverState? 1: 0.5,
                cursor: 'pointer',
            }} onMouseEnter={()=>sethoverState(true)} onMouseLeave={()=>sethoverState(false)} onClick={()=>onClicked && onClicked(id ?? '01')}>
                <Box sx={{
                    fontSize: '60px',
                    fontFamily: 'Monument Extended',
                    color:hoverState ? '#93F825' : '#FA94AA' ,
                    fontVariationSettings: `'wght' 675`,
                    fontWeight: 675,
                    fontStyle: 'normal',
                }}>
                    {id}
                </Box>

                <Box sx={{
                    fontSize: '30px',
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
    top: '386px',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
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
            <Modal style={{
                backgroundImage: `url(${modal01})`,
                backgroundSize: 'contain',
                display: showId === '01' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 34,
                    height: 34,
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    maxWidth: '92vw',
                    margin: '0 auto',
                    paddingTop: '30px',
                    // display: 'flex',
                }}>
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
                </Box>
            </Modal>
        </>
    )
}

const Modal02 = (props: ModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Modal style={{
                backgroundImage: `url(${modal02})`,
                backgroundSize: 'contain',
                display: showId === '02' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 34,
                    height: 34,
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    maxWidth: '92vw',
                    margin: '0 auto',
                    paddingTop: '30px',
                    // display: 'flex',
                }}>
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
                </Box>
            </Modal>
        </>
    )
}

const Modal03 = (props: ModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Modal style={{
                backgroundImage: `url(${modal03})`,
                backgroundSize: 'contain',
                display: showId === '03' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 34,
                    height: 34,
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    maxWidth: '92vw',
                    margin: '0 auto',
                    paddingTop: '30px',
                    // display: 'flex',
                }}>
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
                    }}>GameFi & $ PPC</Box>
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
                </Box>
            </Modal>
        </>
    )
}

const Modal04 = (props: ModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Modal style={{
                backgroundImage: `url(${modal04})`,
                backgroundSize: 'contain',
                display: showId === '04' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 34,
                    height: 34,
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    maxWidth: '92vw',
                    margin: '0 auto',
                    paddingTop: '30px',
                    // display: 'flex',
                }}>
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
                    <ModalP sx={{width: '50vw'}}>
                    Dummy Planet is an open social metaverse. 
                    </ModalP>
                    <ModalP sx={{width: '50vw'}}>
                    On this planet, Dummy NFTs is your digital identity, and Puggies are your guides in the world. We can interact with other dummies and communicate by voice. We can have our own decorated houses and invite others to visit our homes. We can have real neighbors. We can not only communicate within the game but also become friends outside the game. Apart from houses, we can run or visit commercial buildings. 
                    </ModalP>
                    <ModalP sx={{width: '50vw'}}>
                    Currently, we are communicating with some DJs. And we will run Puggy Club after Dummy Planet goes online. This is a club where everyone can bring their Puggies with them. We can listen to music, dance, and give rewards here. Of course, we are also preparing to build graffiti walls, trend shops, etc.                    </ModalP>
                </Box>
            </Modal>
        </>
    )
}

const Modal05 = (props: ModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Modal style={{
                backgroundImage: `url(${modal05})`,
                backgroundSize: 'cover',
                display: showId === '05' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 34,
                    height: 34,
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    maxWidth: '92vw',
                    margin: '0 auto',
                    paddingTop: '30px',
                    // display: 'flex',
                }}>
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
                    <ModalP sx={{width: '36vw'}}>
                    Dummy planet is not just a virtual world, and it is also connected to our real world.
                    </ModalP>
                    <ModalP sx={{width: '36vw'}}>
                    Dummy culture will become a community-driven cultural trend. It will cooperate with trendy brands, regularly release Dummy peripheral products, and open offline clubs. The value generated by Dummy culture will be shared with ecological participants including NFT holders, token holders, etc.                    
                    </ModalP>
                </Box>
            </Modal>
        </>
    )
}

const Modal06 = (props: ModalProps):JSX.Element=>{
    const {showId, onClosed} = props;
    return (
        <>
            <Modal style={{
                backgroundImage: `url(${modal06})`,
                backgroundSize: 'contain',
                display: showId === '06' ? 'block' : 'none',
            }}>
                <img src={close} alt="close" style={{
                    width: 34,
                    height: 34,
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    cursor: 'pointer',
                }} onClick={onClosed}/>
                <Box sx={{
                    maxWidth: '92vw',
                    margin: '0 auto',
                    paddingTop: '30px',
                    // display: 'flex',
                }}>
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
                </Box>
            </Modal>
        </>
    )
}


const MindMap = ():JSX.Element=>{
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

export default MindMap;