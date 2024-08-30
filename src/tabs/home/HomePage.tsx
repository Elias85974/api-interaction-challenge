import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css'; // Import CSS for styling

const Homepage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // useNavigate hook for navigation

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent form submission
        if (searchTerm.trim()) {
            // Navigate to the UserData page with the search term as a parameter
            navigate(`/user/${searchTerm.trim()}`);
        }
    };

    return (
        <div className="homepage-container">
            <h1>INSTALKER</h1>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for an account"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    );
};

export default Homepage;
