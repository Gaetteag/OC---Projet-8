import '../styles/banner.css'
import HomeBannerImage from '../assets/HomeBannerImage.svg'

function Banner() {
    return (
        <section className='homeBanner'> 
            <img src={HomeBannerImage} alt="Bannière de la page d'accueil"></img>
            <h1>Chez vous, partout et ailleurs</h1>
        </section>
    )
}

export default Banner