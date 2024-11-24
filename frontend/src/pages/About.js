import '../styles/about.css'
import Banner from '../components/Banner'
import AboutBannerImage from '../assets/AboutBannerImage.svg';

function About() {
    return (
        <main>
            <p>Page à-propos</p>
            <Banner 
                bannerImgSrc={AboutBannerImage}
            />
        </main>
    )
}

export default About;