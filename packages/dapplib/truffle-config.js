require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net provide hunt local food special'; 
let testAccounts = [
"0xb8e24c11b69202a2c5681f75a798d7524617564745fa5e9e9c6a5d5cd4c87d40",
"0x81df273d3634c7da4847dcc509594478b7d2411ff2fc2c31d9cf444c1b87d4ea",
"0x9551a03fa19ccaa1ebef605dfd9086445c15b7dac6316c58801d05731a70a750",
"0x75da3edd3041061e77722b065ecb4a524b5ba07c902b45806c021070fb252bdf",
"0x7eb2e566279c0d45c1000a3ea59cbb7f4e2215fcc82d8da7ea67aa924b3ea553",
"0xb0135a9fbd1ba8e52391aa49c9567110690a9a284b05e6b38f67881ccc279f12",
"0x9f014afdd0b3c9c29ddd0971d5d48cee45c501d4e0e3a0ca8d3e67dcc0adb52a",
"0xa7f81829046b6c647fc1c15ebb2289578610b348633f77c8177827fd5cd7c68d",
"0xe88d0e76795fe3c8f82869891b9b1f60bdb2af68efdc5fd9a2621f4068921b71",
"0x49c2b59b1788019b771116da53426c8e14d67d6b5547eeda14153ed820acb248"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


