import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Carrousel from '../components/Carrousel';
import Collapse from '../components/Collapse';
import Owner from '../components/Owner';
import '../styles/apartments.css'

function Apartments() {
    const { id } = useParams();
    const [apartment, setApartment] = useState(null);
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

    return apartment ? (
        <div className='apartmentPage'>
            <Carrousel 
                pictures={apartment.pictures}
            />
            <h1>{apartment.title}</h1>
            <p className='apartmentLocation'>{apartment.location}</p>
            <div className='apartmentsTags'>
                {apartment.tags.map((tag, index) => (
                    <span key={index} className="apartmentTag">{tag}</span>
                ))}
            </div>
            <Owner 
                name={apartment.host.name} picture={apartment.host.picture} 
            />
            <div className='apartmentRating'>
                <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-xs fa-solid fa-star neutral-star" aria-hidden="true"></i>
                <span className="sr-only">Note de 4 sur 5</span>
            </div>
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