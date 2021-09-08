import './NameCard.css';

import React from 'react'

export default function NameCard({ SuggestedName }) {
    const url = 'https://www.namecheap.com/domains/registration/results/?domain=';
    return (
        <a target="_blank" rel="noreferrer" href={`${url}${SuggestedName}`} style={{ textDecoration: "none" }}>
            <div className='name-container'>
                <p className='name-card'>{SuggestedName}</p>
            </div>
        </a>
    )
}
