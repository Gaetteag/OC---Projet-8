import '../styles/rating.css';
import FullStar from '../assets/FullStar.svg';  // Import de l'étoile pleine
import EmptyStar from '../assets/EmptyStar.svg';  // Import de l'étoile vide

const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);  // Nombre d'étoiles pleines
    const emptyStars = 5 - fullStars;  // Nombre d'étoiles vides
  
    return (
      <div className="apartmentRating">
        {Array.from({ length: fullStars }).map((_, index) => (
          <img key={index} src={FullStar} alt="étoile pleine" className="stars" />
        ))}  
        {Array.from({ length: emptyStars }).map((_, index) => (
          <img key={index} src={EmptyStar} alt="étoile vide" className="stars" />
        ))}  
        <span className="sr-only">Note de {rating} sur 5</span>
      </div>
    );
  };
  
  export default Rating;