import puggyNftAbi from './puggyNftAbi'
import marketAbi from './marketAbi'

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
    {"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
    {"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
]

const contracts = {
    dev: {
        PPC: {
            abi: bep20Abi,
            address: '0x1d319572eaB4bb71BD1dFBAB797bbE9623Ba834C',
        },
        Dummy: {
            abi: bep20Abi,
            address: '0x3972C923A0b6D9f3A85E5c37F3ADe2Fd778D75F4',
        },
        PuggyNFT: {
            abi: puggyNftAbi,
            address: '0x0f762896B14f67A0B1087eC446d4c43d8f728573',
        },
        market: {
          abi: marketAbi,
          address: '0xBB15953d6DBC4da5ECd840613E4751b20d495AbC',
        }
    },
}

export default contracts;