import React, { useEffect, useState } from 'react';
import { getConversations } from '../api/api';
import StartConversation from './StartConversation';

const Conversations = ({ onSelectConversation }) => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const data = await getConversations();
                setConversations(data);
            } catch (error) {
                console.error('Error fetching conversations:', error);
            }
        };

        fetchConversations();
    }, []);

    const handleConversationCreated = (newConversation) => {
        setConversations([...conversations, newConversation]);
    };

    return (
        <div>
            <h1>Conversations</h1>
            <StartConversation onConversationCreated={handleConversationCreated} />
            <ul>
                {conversations.map(conversation => (
                    <li key={conversation.id} onClick={() => onSelectConversation(conversation)}>
                        {conversation.participants.map(participant => participant.username).join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Conversations;
