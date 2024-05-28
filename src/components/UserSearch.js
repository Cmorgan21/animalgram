import React, { useState } from 'react';
import { searchUsers } from '../api/api';
import '../styles/UserSearch.module.css';

const UserSearch = ({ onSelectUser }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value) {
            try {
                const users = await searchUsers(value);
                setResults(users);
            } catch (error) {
                console.error('Error searching users:', error);
            }
        } else {
            setResults([]);
        }
    };

    return (
        <div className="user-search">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for users"
            />
            {results.length > 0 && (
                <ul className="search-results">
                    {results.map((user, index) => (
                        <li key={index} onClick={() => onSelectUser(user)}>
                            {user}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserSearch;
