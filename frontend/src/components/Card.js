import '../styles/card.css'

function Card({ApartmentCover, ApartmentTitle}) {
    return (
        <section className='cards-container'> 
            <figure className='card'>
                <img src={ApartmentCover} alt="Appartement" className='cardImage'></img>
                <figcaption className='cardTitle'>{ApartmentTitle}</figcaption>
            </figure>
        </section>
    )
}

export default Card