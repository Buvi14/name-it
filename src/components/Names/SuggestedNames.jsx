import React from "react";
import NameCard from "../DisplayName/NameCard";
import './SuggestedNames.css';

const SuggestedNames = ({ SuggestedNames }) => {
    const sugName = SuggestedNames.map((name) => {
        return <NameCard key={name} SuggestedName={name} />;
    })
    return (
        <div className="names-container">
            {sugName ? sugName : ''}
        </div>

    )
}

export default SuggestedNames;