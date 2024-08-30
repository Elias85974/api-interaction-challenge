import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

import './GoBackButton.css'; // Import the CSS for the button

const GoBackButton: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <button className="go-back-button" onClick={handleGoBack}>
            &#8592; Go Back
        </button>
    );
};

export default GoBackButton;
