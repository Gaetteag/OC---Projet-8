import { Link } from 'react-router-dom'
import '../styles/header.css'
import LogoHeaderDesktop from '../assets/LogoHeaderDesktop.svg'

function Header() {
    return (
        <header> 
            <nav className='navbar'>
                <Link to="/"><img src={LogoHeaderDesktop} alt="Logo Kasa"></img></Link>
                <ul className='links-navbar'>
                    <li><Link to="/" className='activePage'>Accueil</Link></li>
                    <li><Link to="/about">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header