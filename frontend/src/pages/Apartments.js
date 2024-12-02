import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Collapse from '../components/Collapse';
import LeftArrow from '../assets/LeftArrow.svg';
import RightArrow from '../assets/RightArrow.svg';
import '../styles/apartments.css'

function Apartments() {
    const { id } = useParams();
    const [apartment, setApartment] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/api/properties')
            .then((response) => response.json())
            .then((apartments) => {
                const findApartment = apartments.find((apartment) => apartment.id === id);
                findApartment ? setApartment(findApartment) : navigate('/erreur');
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
                navigate('/erreur');
            });
    }, [id, navigate]);

    const goToNextImage = () => {
        if (apartment.pictures && apartment.pictures.length > 0) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % apartment.pictures.length);
        }
    };

    const goToPreviousImage = () => {
        if (apartment.pictures && apartment.pictures.length > 0) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? apartment.pictures.length - 1 : prevIndex - 1
            );
        }
    };

    return apartment ? (
        <div className='apartmentPage'>
            <div className='apartmentCarrousel'>
                <img src={apartment.pictures[currentImageIndex]} alt={apartment.title} className='apartmentCarrouselImg' />
                {apartment.pictures.length > 1 && (
                    <div>
                        <button className="arrow arrow_left" onClick={goToPreviousImage}>
                            <img src={LeftArrow} alt="flèche pour défiler vers la gauche" />
                        </button>
                        <button className="arrow arrow_right" onClick={goToNextImage}>
                            <img src={RightArrow} alt="flèche pour défiler vers la droite" />
                        </button>
                    </div>
                )}
                {apartment.pictures.length > 1 && (
                    <div className="imageIndex">
                        <p>{currentImageIndex + 1}/{apartment.pictures.length}</p>
                    </div>
                )}
            </div>
            <h1>{apartment.title}</h1>
            <p className='apartmentLocation'>{apartment.location}</p>
            <div className='apartmentsTags'>
                {apartment.tags.map((tag, index) => (
                    <span key={index} className="apartmentTag">{tag}</span>
                ))}
            </div>
            <p className='hostName'>
                <span>{apartment.host.name.split(' ')[0]}</span>{/* Prénom */}
                <span>{apartment.host.name.split(' ')[1]}</span>{/* Nom */}
            </p>
            <img src={apartment.host.picture} alt={apartment.host.name} className='hostPicture'/>
            <p >{apartment.rating}</p>
            <Collapse>
                <p>test collapse</p>
            </Collapse>
            <Collapse>
                <p>test collapse</p>
            </Collapse>
        </div>
    ) : (
        <p>L'appartement n'a pas été trouvé.</p>
    );
}

export default Apartments;