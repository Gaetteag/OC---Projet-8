import '../styles/about.css'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import AboutBannerImage from '../assets/AboutBannerImage.svg';
import collapseContent from '../collapseContent'

function About() {
    return (
        <main>
            <Banner 
                bannerImgSrc={AboutBannerImage}
            />            
            <section className='collapse-container'>
                {collapseContent.map((item, index) => (
                    <Collapse 
                        key={index} 
                        title={item.title} 
                    />
                ))}
            </section>
        </main>
    )
}

export default About