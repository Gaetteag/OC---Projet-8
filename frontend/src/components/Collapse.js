import React, { useRef, useState } from 'react';
import '../styles/collapse.css';
import CollapseArrow from '../assets/CollapseArrow.svg';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <figure className='collapse'>
      <div className='collapseContent' onClick={() => setIsOpen(!isOpen)}>
        <span className='collapseTitle'>{title}</span>
        <img className='collapseArrow' src={CollapseArrow} alt='flèche de contenu déroulant' 
          style={{
            transform: isOpen ? 'rotate(-180deg)' : '',
            transition: 'transform 0.5s linear',
          }}
        />
      </div>
      <div className='collapseDescriptionContent' ref={contentRef} 
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
          transition: 'max-height 0.5s linear',
        }}
      >
        {children}
      </div>
    </figure>
  );
}

export default Collapse;
