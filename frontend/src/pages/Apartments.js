import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Carrousel from '../components/Carrousel';
import NameAndLocation from '../components/NameAndLocation';
import Tags from '../components/Tags';
import Owner from '../components/Owner';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
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
            <NameAndLocation 
                title={apartment.title}
                location={apartment.location} 
            />
            <Tags 
                tags={apartment.tags} 
            />
            <Owner 
                name={apartment.host.name} picture={apartment.host.picture} 
            />
            <Rating 
                rating={apartment.rating} 
            />
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