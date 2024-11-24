import '../styles/home.css'
import Banner from '../components/Banner'
import Card from '../components/Card';
import HomeBannerImage from '../assets/HomeBannerImage.svg';

function Home() {
    return (
        <main>
            <Banner 
                bannerImgSrc={HomeBannerImage}
                bannerTitle="Chez vous, partout et ailleurs"
            />
            <Card />
        </main>
    )
}

export default Home