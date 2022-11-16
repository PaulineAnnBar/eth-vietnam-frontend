import './styles.css';
import { Button } from '@mui/material';
import TwitterLogo from '../../assets/TwitterLogo.svg';
import DiscordLogo from '../../assets/DiscordLogo.svg';

const Header = () => {
    return (
        <div className='headerContent'>
            <div>
                <img src={"/logo.png"} alt={"logo"} className={"logo"} />
            </div>
            <div className='headerLinks main-link'>
                <Button variant='outlined' size='small' color='secondary' className='button-spacing'>about</Button>
                <Button variant='outlined' size='small' color='secondary' className='button-spacing'>docs</Button>
                <Button variant='outlined' size='small' color='secondary' className='button-spacing'>whitepaper</Button>
                <a href='#'><img src={TwitterLogo} /></a>
                <a href='#'><img src={DiscordLogo} /></a>
            </div>
        </div>
    )
}

export default Header;