import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Card from '../components/Card';
import HomeBannerImage from '../assets/HomeBannerImage.svg';

function Home() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/properties')
            .then((response) => response.json())
            .then((apartments) => {setProperties(apartments)})
            .catch((error) => console.error('Erreur lors de la récupération des données :', error));
    }, []);

    return (
        <main>
            <Banner
                bannerImgSrc={HomeBannerImage}
                bannerTitle="Chez vous, partout et ailleurs"
            />
            <section className="cards-container">
                {properties.length > 0 ? (
                    properties.map((property) => (
                        <Link to={`/apartment/${property.id}`} key={property.id}>
                            <Card
                                ApartmentCover={property.cover}
                                ApartmentTitle={property.title}
                            />
                        </Link>
                        ))
                ) : (
                    <p>Aucun appartement disponible</p>
                )}
            </section>
        </main>
    );
}

export default Home
