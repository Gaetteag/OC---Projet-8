import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import AboutBannerImage from '../assets/AboutBannerImage.svg';
import collapseContent from '../data/collapseContent';

function About() {
    return (
        <main>
            <Banner 
                bannerImgSrc={AboutBannerImage}
                bannerTitle="Bannière de la page à-propos"
            />            
            <div className="collapseAboutPage page-about">
                {collapseContent.map((item, index) => (
                    <Collapse 
                        key={index}
                        title={item.title}>
                        <div>{item.content}</div>
                    </Collapse>
                ))}
            </div>
        </main>
    );
}

export default About;
