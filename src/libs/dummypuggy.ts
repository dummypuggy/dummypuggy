import { ethers } from "ethers";
import axios, { AxiosInstance } from 'axios';

import contracts from '../config/contracts';

const TOKENKEY = 'dp:token';
const TOKENEXPIREKEY = 'dp:tokenexpire'

class DummyPuggy {

    private static _ins: DummyPuggy;

    static get instance(): DummyPuggy {
        return this._ins || (this._ins = new DummyPuggy());
    }

    provider: ethers.providers.Web3Provider| undefined;
    accountAdress: string = '';
    apiInstance: AxiosInstance = axios.create();
    token: string | null = '';
    contracts = contracts;

    getToken():string|null{
      return this.token;
    }

    async connect(){
        try {
            // @ts-ignore
            if (!ethereum || !ethereum.isMetaMask) {
              alert('plase install MetaMask.');
              return false;
            }
            // @ts-ignore
            const a = await window.ethereum.request({ method: 'eth_requestAccounts' });
            this.accountAdress = a[0];
            // @ts-ignore
            this.provider = new ethers.providers.Web3Provider(window.ethereum, "any")

            // const chainId = await this.getChainId();
            // if( chainId !== 56){
            //   await this.setBinanceMainChain();
            // }    

            // console.log(this.provider.getSigner())
            
            // const rst = await this.web3.eth.getAccounts();
            // this.accountAddress = rst[0];
            
            return this.accountAdress;
        } catch (error) {
            console.log(error)
            alert('MetaMask not install in your browser.');
            return false;
        }
    }

    ppcContract(){
      return new ethers.Contract(contracts.dev.PPC.address, contracts.dev.PPC.abi, this.provider);
  }

  DummyContract(){
      return new ethers.Contract(contracts.dev.Dummy.address, contracts.dev.Dummy.abi, this.provider);
  }

  PuggyNFTContract(){
      return new ethers.Contract(contracts.dev.PuggyNFT.address, contracts.dev.PuggyNFT.abi, this.provider);
  }

  async getBalance() {
      const balance = await this.provider?.getBalance(this.accountAdress);
      const balanceEth = ethers.utils.formatEther(balance ?? 0);
      const ppc = await this.ppcContract().balanceOf(this.accountAdress);
      const ppcEth = ethers.utils.formatEther(ppc ?? 0);
      const dummy = await this.DummyContract().balanceOf(this.accountAdress);
      const dummyEth = ethers.utils.formatEther(dummy ?? 0);
      console.log(balanceEth, ppcEth, dummyEth);
      return {
        bnb: balanceEth,
        ppc: ppcEth,
        dummy: dummyEth,
      }
  }

    async getChainId():Promise<number> {
        //@ts-ignore
        const { chainId } =  await this.provider.getNetwork();
        return chainId;
    }

    async setBinanceMainChain(): Promise<any> {
        try {
          // @ts-ignore
          try {
            // @ts-ignore
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x38' }],
            });
          } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            // @ts-ignore
            if (switchError.code === 4902) {
              try {
                // @ts-ignore
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [{
                    chainId: '0x38',
                    chainName: 'Binance Smart Chain Mainnet',
                    nativeCurrency: {
                        name: 'Binance Coin',
                        symbol: 'BNB',
                        decimals: 18
                    },
                    rpcUrls: ['https://bsc-dataseed1.binance.org'],
                    blockExplorerUrls: ['https://bscscan.com']
                    }],
                });
              } catch (addError) {
                // handle "add" error
              }
            }
            // handle other "switch" errors
          }
        } catch (error) {
          // @ts-ignore
          if (error && error.code === 4001) {
            return false;
          }
        }
      }


    async sign(msg: string): Promise<string> {
        try {
          //@ts-ignore
        const signer= new ethers.providers.Web3Provider(window.ethereum).getSigner();
        const signature= await signer.signMessage(msg);
        // const signerAddr = await signer.getAddress();
        // console.log('原始签名地址', signerAddr.toLowerCase());
        return signature;
        } catch (error) {
          //@ts-ignore
          return error.toString()
        }
      }
    
      async verify({msg, addr, sig}: {msg:string, addr: string, sig:string}): Promise<boolean>{
        try {
          const signerAddr = await ethers.utils.verifyMessage(msg, sig);
          // console.log(addr, signerAddr)
          // console.log('验证地址:', addr.toLowerCase())
          // console.log('签名地址:', signerAddr.toLowerCase())
          return addr.toLowerCase() === signerAddr.toLowerCase();
        } catch (error) {
          console.log(error)
          return false
        }
      }

      getRawData(address: string,nonce: string, ts: number){
        return `Welcome to Dummy Puggy!
Click "Sign" to sign in. No password needed!
This request will not trigger a blockchain transaction or cost any gas fees.
Your authentication status will be reset after 24 hours.
I accept the Dummy Puggy Terms of Service: https://dummypuggy.io/terms         
Wallet address: ${address}
Nonce: ${nonce}
TimeStamp: ${ts}`
      }

      initSdk(baseUrl:string){
        this.apiInstance = axios.create({
          baseURL: baseUrl,
          timeout: 5000,
        });
        // config.headers.Authorization =  token;
        this.apiInstance.interceptors.request.use( (config)=> {
          const _token = this.getToken();
          if(_token){
            config.headers = {
              Authorization: `Bearer ${this.token}`,
            };
          }
            return config;
        });
        this.apiInstance.interceptors.response.use(function (response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          console.log('response',response);
          if(response.data.code !== 200){
            return Promise.reject(new Error(`[${response.data.error.msg_id}] ${response.data.error.msg}`));
          }
          return response;
        }, function (error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          return Promise.reject(error);
        });
      }

      async LoginByMetamask(){
        this.token = localStorage.getItem(TOKENKEY)
        if(this.token){
          let expireTime = parseInt(localStorage.getItem(TOKENEXPIREKEY) ?? '0');

          if(expireTime > Date.now()){
            return {
              token: this.token
            }
          }
        }

        const loginRst = await this.apiInstance.post('/api/v1/user/login', {
          address: this.accountAdress,
        });
        const _ts = Math.floor(Date.now()/1000)
        const rawData = this.getRawData(loginRst?.data?.data?.address,loginRst?.data?.data?.nonce, _ts)
        const _sign = await DummyPuggy.instance.sign(rawData);
        console.log('明文:', rawData)
        console.log('签名:', _sign)
        console.log('地址:', DummyPuggy.instance.accountAdress)
        const authRst = await this.apiInstance.post('/api/v1/user/auth', {
          "address": loginRst?.data?.data?.address,
          "nonce": loginRst?.data?.data?.nonce,
          "sign": _sign,
          "timestamp": _ts
        });
        console.log('authRst.data.data', authRst?.data?.data?.token)
        localStorage.setItem(TOKENKEY, authRst?.data?.data?.token)
        const fiveDaysLater = Date.now()+(1000*60*60*24*5);
        localStorage.setItem(TOKENEXPIREKEY, fiveDaysLater.toString())
        return authRst?.data?.data;
      }

}

export default DummyPuggy