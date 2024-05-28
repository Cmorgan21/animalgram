import React, { useState } from 'react';
import { createConversation } from '../api/api';
import UserSearch from './UserSearch';
import '../styles/StartConversation.module.css';

const StartConversation = ({ onConversationCreated }) => {
    const [participants, setParticipants] = useState([]);
    const [error, setError] = useState(null);

    const handleUserSelect = (username) => {
        if (!participants.includes(username)) {
            setParticipants([...participants, username]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (participants.length < 2) {
            setError('At least two participants are required');
            return;
        }

        try {
            const newConversation = await createConversation({ participants });
            onConversationCreated(newConversation);
        } catch (error) {
            setError('Error creating conversation. Please try again.');
            console.error('Error creating conversation:', error);
        }
    };

    return (
        <div className="start-conversation">
            <UserSearch onSelectUser={handleUserSelect} />
            <ul className="selected-participants">
                {participants.map((participant, index) => (
                    <li key={index}>{participant}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <button type="submit">Start Conversation</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default StartConversation;
