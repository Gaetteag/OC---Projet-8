import '../styles/collapse.css'
import CollapseArrow from '../assets/CollapseArrow.svg';

function Collapse({ title }) {
    return (
        <figure className='collapse'>
            <span className='collapseTitle'>{title}</span>
            <img src={CollapseArrow} alt='flèche de contenu déroulant'></img>
        </figure>
    )
}

export default Collapse