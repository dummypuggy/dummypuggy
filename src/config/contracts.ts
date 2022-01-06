import puggyNftAbi from './puggyNftAbi'

const bep20Abi = [
    {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
    },
]

const contracts = {
    dev: {
        PPC: {
            abi: bep20Abi,
            address: '0x7135EccD9427Ff3feCb91bEe1bf226CC0E48204E',
        },
        Dummy: {
            abi: bep20Abi,
            address: '0x957E7Ec818D2F8226B4DCEc21A336b0E7290b872',
        },
        PuggyNFT: {
            abi: puggyNftAbi,
            address: '0xAc78FFc3085b6Ae787936A6A8bf3296B280e5D06',
        },
    },
}

export default contracts;