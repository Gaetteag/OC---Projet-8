import { useLocation } from 'react-router-dom';
import '../styles/banner.css'

function Banner({bannerImgSrc, bannerTitle}) {
    const location = useLocation();
    return (
        <section>
            <figure className='banner'>
                <img src={bannerImgSrc} alt={bannerTitle}></img>
                {location.pathname === '/' && <h1>{bannerTitle}</h1>}
            </figure>
        </section>
    )
}

export default Banner