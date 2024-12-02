import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
            <h1>{apartment.title}</h1>
            <img src={apartment.cover} alt={apartment.title} />
        </div>
    ) : (
        <p>L4appartement n'a pas été trouvé.</p>
    );
}

export default Apartments;