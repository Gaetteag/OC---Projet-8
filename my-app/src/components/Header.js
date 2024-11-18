import { Link } from 'react-router-dom'
import '../styles/header.css'

function Header() {
    return (
        <header> 
            <nav>
                <ul>
                    <li><image>Ajouter logo du site</image></li>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;