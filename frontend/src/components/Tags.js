import '../styles/tags.css';

function Tags({ tags }) {
    return (
        <div className="apartmentsTags">
            {tags.map((tag, index) => (
                <span key={index} className="apartmentTag">
                    {tag}
                </span>
            ))}
        </div>
    );
}

export default Tags;
