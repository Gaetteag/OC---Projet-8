import '../styles/card.css';

function Card({ ApartmentCover, ApartmentTitle }) {
    return (
        <figure className="card">
            <img src={ApartmentCover} alt={ApartmentTitle} className="cardImage" />
            <figcaption className="cardTitle">{ApartmentTitle}</figcaption>
        </figure>
    );
}

export default Card;