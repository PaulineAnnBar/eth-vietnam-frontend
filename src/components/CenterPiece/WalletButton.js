import './styles.css';
import { createClient, configureChains, chain,WagmiConfig } from 'wagmi'
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

const {chains, provider} = configureChains([chain.mainnet], [publicProvider()]);

 const {connectors} =getDefaultWallets({
    appName:"Eth Vietnam",
    chains,
});
 
 const wagmiClient = createClient({
     connectors,
     provider,
 })

const WalletButton = () => {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
        <div >
            <ConnectButton/>
        </div>
            </RainbowKitProvider>
        </WagmiConfig>
    )
}

export default WalletButton;