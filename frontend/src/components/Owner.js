import '../styles/owner.css';

function Owner({ name, picture }) {
    const [firstName, lastName] = name.split(' ');

    return (
        <div className="hostInformations">
            <div className="hostName">
                <span>{firstName}</span>
                <span>{lastName}</span>
            </div>
            <img src={picture} alt={`${name}`} className="hostPicture" />
        </div>
    );
}

export default Owner;