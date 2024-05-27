import React, { useState } from 'react';
import { createConversation } from '../api/api';

const StartConversation = ({ onConversationCreated }) => {
    const [participants, setParticipants] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const participantsArray = participants.split(',').map(username => username.trim());

        try {
            const newConversation = await createConversation({ participants: participantsArray });
            onConversationCreated(newConversation);
        } catch (error) {
            setError('Error creating conversation. Please try again.');
            console.error('Error creating conversation:', error);
        }
    };

    return (
        <div>
            <h2>Start a New Conversation</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Participants (comma separated usernames):
                    <input
                        type="text"
                        value={participants}
                        onChange={(e) => setParticipants(e.target.value)}
                    />
                </label>
                <button type="submit">Start Conversation</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default StartConversation;
