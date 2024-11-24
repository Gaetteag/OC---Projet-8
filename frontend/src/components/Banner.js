import '../styles/banner.css'

function Banner({bannerImgSrc, bannerTitle}) {
    return (
        <section>
            <figure className='banner'>
                <img src={bannerImgSrc} alt={bannerTitle}></img>
                <h1>{bannerTitle}</h1>
            </figure>
        </section>
    )
}

export default Banner