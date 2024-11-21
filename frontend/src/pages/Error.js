import { Link } from 'react-router-dom'
import '../styles/error.css'

function Error() {
    return (
        <main>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className='returnToHomePage'>Retourner sur la page d'accueil</Link>
        </main>
    );
}

export default Error