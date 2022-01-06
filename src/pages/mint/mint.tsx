import { ethers, Signer } from 'ethers';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import DummyPuggy from '../../libs/dummypuggy';

import { toast } from 'react-toastify';

const Header = styled.div`
    background-color: rgba(0,0,0, 0.3);
`
const W1400 = styled.div`
    margin: 0 auto;
    padding: 0;
    max-width: 1400px;
`

const Page = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`

const BgImage = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: url(${require('../../images/mintbg.jpg').default});
    background-size: contain;
`

const BgBlack = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(38,50,77, 0.8);
`

const FiveDogs = styled.div`
    position: absolute;
    left: 10vw;
    // top: 16vw;
    top: calc(calc(100vh - 18.8vw - 5vw) / 2);
    // top: 11vw;
    width: 49vw;
    height: 18.8vw;
    background-image: url(${require('../../images/5dogs.png').default});
    background-size: cover;
    // border: 1px solid #f00;
`


const Camp = styled.div`
    position: absolute;
    right: 22vw;
    // top: 7vw;
    top: calc(calc(100vh - 33.4vw - 5vw) / 2);
    // top: 2vw;
    width: 16vw;
    height: 33.4vw;
    background: url(${require('../../images/campslebg.png').default}) top no-repeat;
    background-size: contain;
    // border: 1px solid #f00;
`

const ConnectAndLogin = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5.6vw;
`

const Button = styled.button`
  background: #2CFF98;
  border: none;
  border-radius: 1.9vw;
  color: black;
  font-size: 1.2vw;
  font-family: MEUltrabold;
  height: 3.8vw;
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  letter-spacing:0.1vw;
`



const BgVideo = ():JSX.Element=>{
    return (
        <>
            <video  preload="auto" loop muted playsInline autoPlay style={{
                position: 'absolute',
                width: '100vw',
                // right: '0',
                // left: '0',
                top: '0',
            }}>
                  <source src={require('../../images/mintvideobg.mp4').default} type="video/mp4" />
            </video>
        </>
    )
}


const ButtonMint = styled.button`
  background: url(${require('../../images/mintbtn.svg').default}) center no-repeat;
  background-size: contain;
  border: none;
  border-radius: 1.4vw;
  font-size: 0.5vw;
  font-family: MEUltrabold;
  height: 2.7vw;
  display: block;
  position: absolute;
  color: white;
  bottom: 0;
  width: 100%;
  letter-spacing:0.1vw;
`

const addbtnStyle: React.CSSProperties = {
    width:'1.5vw',
    height: '1.5vw',
    lineHeight: '1.2vw',
    textAlign: 'center',
    border: '1px solid #979797',
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: '2px',
    color: '#fff',
    cursor: 'pointer',
    userSelect: 'none',
};
const MintPart = ():JSX.Element=>{
    const [login, setLogin] = useState('unconnect');
    const [isWhitelist, setisWhitelist] = useState('loading')
    const [mintCount, setmintCount] = useState(1)
    const [connectLoading, setconnectLoading] = useState(false)
    const [loginLoading, setloginLoading] = useState(false)
    const [mintLoading, setmintLoading] = useState(false)
    return (
        <>
            <Content>
                <BgImage/>
                <BgVideo/>
                <BgBlack/>
                <FiveDogs/>
                {/* // (<Button onClick={async ()=>{
                                //     await DummyPuggy.instance.connect();
                                //     const rst = await DummyPuggy.instance.PuggyNFTContract().whitelist(DummyPuggy.instance.accountAdress);
                                //     setLogin('connected');
                                //     console.log('rst', rst);
                                //     setisWhitelist(rst ? 'yes' : 'no')
                                // }}>Connect Wallet</Button>) */}
                <Camp>

                    {
                        login === 'unconnect' || isWhitelist === 'yes' ? (<img src={require('../../images/ask.png').default} alt="?" style={{
                            position: 'absolute',
                            top: '10vw',
                            left: '3vw',
                            width: '10vw',
                            display: 'block',
                         }}/>) :
                         (<img src={require('../../images/whitelist.png').default} alt="?" style={{
                            position: 'absolute',
                            top: '10vw',
                            left: '3vw',
                            width: '10vw',
                            display: 'block',
                         }}/>)
                    }
                    
                    <ConnectAndLogin>
                        {
                            login === 'unconnect' ?
                                (
                                    <Button onClick={async ()=>{
                                        setconnectLoading(true)
                                            await DummyPuggy.instance.connect();
                                            const rst = await DummyPuggy.instance.PuggyNFTContract().whitelist(DummyPuggy.instance.accountAdress);
                                            setLogin('connected');
                                            console.log('rst', rst);
                                            setisWhitelist(rst ? 'yes' : 'no')
                                            setconnectLoading(false)
                                        }} disabled={connectLoading}> {connectLoading ? 'Connecting...' : 'Connect Wallet'}</Button> 
                                )
                            : login === 'connected' ? 
                                (<Button style={{
                                    fontSize: '0.3vw',
                                }} onClick={async ()=>{
                                    DummyPuggy.instance.initSdk('http://35.153.208.207:8090');
                                    try {
                                        setloginLoading(true)
                                        await DummyPuggy.instance.LoginByMetamask();
                                        setLogin('logedin');
                                    } catch (error) {
                                        console.error(error)
                                        toast('something went wrong')
                                    }
                                    setloginLoading(false);
                                }} disabled={loginLoading}>{loginLoading? 'waiting...' : `Login(${DummyPuggy.instance.accountAdress.substr(0,4)}***${DummyPuggy.instance.accountAdress.substr(38,4)})`}</Button>)
                            : isWhitelist === 'yes' ?
                                (
                                    <>

                            <div style={{
                                        position: 'absolute',
                                        inset: '1vw 5vw 0',
                                    }}>
                                         {/* flexGrow: 1, */}
                                        <div style={{
                                            display: 'flex',
                                        }}>
                                    <div style={{
                                        fontSize: '1.2vw',
                                    ...addbtnStyle
                                    }} onClick={()=>{
                                        const _c = mintCount - 1
                                        setmintCount(_c < 1 ? 1 : _c)
                                    }}>-</div>
                                    <div style={{
                                        flexGrow: 1,
                                        textAlign: 'center',
                                        height: '1.5vw',
                                        lineHeight: '1.5vw',
                                    }}> {mintCount} </div>

                                    <div style={{
                                        fontSize: '1vw',
                                    ...addbtnStyle
                                    }} onClick={()=>{
                                        const _c = mintCount + 1
                                        setmintCount(_c > 50 ? 50 : _c)
                                    }}>+</div>
                                        </div>
                                        
                                        <ButtonMint onClick={async ()=>{
                                            setmintLoading(true)
                                        try {
                                            const _d: any = await DummyPuggy.instance.apiInstance.get('/api/v1/marketplace/permit')
                                            console.log(`permit rst is `, _d.data.data);
                                            const _data: any = _d.data.data;
                                            const signer = DummyPuggy.instance.provider?.getSigner()
                                            const puggyNFTContract = DummyPuggy.instance.PuggyNFTContract();
                                            const puggyNFTContractWithSigner = puggyNFTContract.connect(signer as Signer);
                                            const options = {value: ethers.utils.parseEther((0.01*mintCount).toString())}
                                            const d = await puggyNFTContractWithSigner.privateMint(mintCount,_data?.random
                                             , _data?.sign, options);
                                             console.log(d)
                                             toast('铸造成功,等待区块确认,请稍后在钱包查看')
                                        } catch (error) {
                                            console.error(error)
                                            toast('something went wrong')
                                        }
                                        setmintLoading(false)
                                    }} disabled={mintLoading}>{mintLoading ? '......' : 'Mint'}</ButtonMint>
                                    </div>
                                    </>
                                )
                            :
                                    (
                                        <p style={{
                                            textAlign: 'center',
                                            paddingTop: '1.6vw',
                                        }}>
                                            You are not currently 
                                            in the white list 
                                        </p>
                                    )
                        }
                        
                    </ConnectAndLogin>
                </Camp>
            </Content>
        </>
    )
}

const Mint = ():JSX.Element=>{

        return (
            <>
                <Page>
                    <Header>
                        <W1400>
                            <Link to="/"><h1 className="logo">DummyPuggy</h1></Link>    
                        </W1400>
                    </Header>
                    <MintPart/>
                </Page>
            </>
        )
}

export default Mint;