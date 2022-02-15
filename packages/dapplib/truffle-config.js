require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note meadow common gloom kite swear security'; 
let testAccounts = [
"0x5b35134883d9324567a061aad2699e15d9681570f4ff65758b1c1cc66bf97b83",
"0x0607e1e713cb302a77c67a4258c80dd4eaaae8edd1b6303dd93276e007ac9bb3",
"0xc97a6d72203df312af81fe49630045fa73d163add35cce50c23ea500e1821c1c",
"0xa25047190b12ae2f688d71bd49d803cdc2c809b66dba18382a5059f519080319",
"0x991d3c0ba7a823ae570e8a6bb07f8ff44ae262a21e258aa11caf740fc4ae4ccf",
"0x615da04aa69878c21680f683b7e3f87afdbf735fd3c8110133ab23079facfcd9",
"0x07afe3ef2aec34afe3a975643c53b9aa1bbc09eb8a142e1377d1e8fe90cb13e9",
"0x63338b02fef83eb7fb0afdd668c5edaf70a369c56b0121d01ef4cacbf40e3769",
"0x76e6e37312672ece2ac48bf029a805e6d10806469cb5821bd899c13ccbd17f3f",
"0x621655883bfa42fc2ee93c1b331362ed1b805a24b34e55e13b130958b635723f"
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


