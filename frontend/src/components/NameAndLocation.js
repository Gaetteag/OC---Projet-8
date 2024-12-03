import '../styles/nameandlocation.css';

function NameAndLocation({ title, location }) {
    return (
        <>
            <h1>{title}</h1>
            <p className='apartmentLocation'>{location}</p>
        </>
    );
}

export default NameAndLocation;