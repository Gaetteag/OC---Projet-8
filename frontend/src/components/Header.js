import { Link, useLocation } from 'react-router-dom'
import '../styles/header.css'
import LogoHeaderDesktop from '../assets/LogoHeaderDesktop.svg'

function Header() {
    const location = useLocation();

    return (
        <header> 
            <nav className='navbar'>
                <Link to="/"><img src={LogoHeaderDesktop} alt="Logo Kasa" className='logo'></img></Link>
                <ul className='links-navbar'>
                    <li>
                        <Link to="/" className={location.pathname === '/' ? 'activePage' : ''}>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={location.pathname === '/about' ? 'activePage' : ''}>
                            A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header