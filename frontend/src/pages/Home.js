import { useState, useEffect } from 'react';
import '../styles/home.css';
import Banner from '../components/Banner';
import Card from '../components/Card';
import HomeBannerImage from '../assets/HomeBannerImage.svg';

function Home() {
    const [properties, updateProperties] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/properties')
            .then((response) => response.json())
            .then((data) => {
                updateProperties(data)
            })
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
                        <Card
                            key={property.id}
                            ApartmentCover={property.cover}
                            ApartmentTitle={property.title}
                        />
                    ))
                ) : (
                    <p>Aucun appartement disponible</p>
                )}
            </section>
        </main>
    );
}

export default Home;
