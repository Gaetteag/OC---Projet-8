import '../styles/card.css'
import ApartmentCard from '../assets/ApartmentCard.svg'

function Card() {
    return (
        <section className='cards'> 
            <img src={ApartmentCard} alt="Appartement" className='card'></img>
            <img src={ApartmentCard} alt="Appartement" className='card'></img>
            <img src={ApartmentCard} alt="Appartement" className='card'></img>
            <img src={ApartmentCard} alt="Appartement" className='card'></img>
            <img src={ApartmentCard} alt="Appartement" className='card'></img>
            <img src={ApartmentCard} alt="Appartement" className='card'></img>
            <img src={ApartmentCard} alt="Appartement" className='card'></img>
            <img src={ApartmentCard} alt="Appartement" className='card'></img>
        </section>
    )
}

export default Card