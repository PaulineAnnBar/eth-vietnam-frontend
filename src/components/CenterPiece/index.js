import './styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import WalletButton from "./WalletButton";

const CenterPiece = () => {
    return (
        <div className='container'>
            <div className='uniswap-text'>
                The <span className='uniswap-yellow'>Uniswap</span> of Leveraged Tokens and Stablecoins
            </div>
            <div className='center-body-text'>
                Donec in felis vehicula, consectetur massa quis, iaculis turpis. Donec molestie placerat massa, quis cursus nibh efficitur sit amet. Vestibulum pretium ex neque.
            </div>
            <div className='button-container'>
                <WalletButton/>
            </div>
        </div>
    )
}
export default CenterPiece;