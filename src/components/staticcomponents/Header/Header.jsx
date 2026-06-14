import potterverseLogo from '../../../assets/potterverse_semfundo.webp';
import { useAuth } from '../../../hooks/useAuth';
import './Header.css';

function Header(){
    const { signOut } = useAuth();

    return(
        <header className='header'>
            <img src={potterverseLogo} alt='PotterVerse' className='header-logo' />
            <button className='signout-btn' onClick={signOut}>Sair</button>
        </header>
    )
}
export default Header
