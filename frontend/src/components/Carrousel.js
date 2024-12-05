import { useState } from 'react';
import LeftArrow from '../assets/LeftArrow.svg';
import RightArrow from '../assets/RightArrow.svg';
import '../styles/carrousel.css';

function Carrousel({ pictures, title }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        if (pictures && pictures.length > 0) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
        }
    };

    const goToPreviousImage = () => {
        if (pictures && pictures.length > 0) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
            );
        }
    };

    return (
        <figure className="apartmentCarrousel">
            <img src={pictures[currentImageIndex]} alt={title} className="apartmentCarrouselImg" />
            {pictures.length > 1 && (
                <div>
                    <button className="arrow arrow_left" onClick={goToPreviousImage}>
                        <img src={LeftArrow} alt="flèche pour défiler vers la gauche" />
                    </button>
                    <button className="arrow arrow_right" onClick={goToNextImage}>
                        <img src={RightArrow} alt="flèche pour défiler vers la droite" />
                    </button>
                </div>
            )}
            {pictures.length > 1 && (
                <div className="imageIndex">
                    <span>{currentImageIndex + 1}/{pictures.length}</span>
                </div>
            )}
        </figure>
    );
}

export default Carrousel;
