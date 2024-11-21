import '../styles/footer.css'
import LogoFooter from '../assets/LogoFooter.svg'

function Footer() {
    return (
        <footer> 
            <img src={LogoFooter} alt="Logo Kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer