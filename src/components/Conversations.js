import React, { useEffect, useState } from 'react';
import { getConversations } from '../api/api';
import StartConversation from './StartConversation';
import '../styles/Conversations.module.css';

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
        <div className="conversations-container">
            <div className="conversations-header">
                <h1>Conversations</h1>
                <StartConversation onConversationCreated={handleConversationCreated} />
            </div>
            <div className="conversations-search">
                <input type="text" placeholder="Search" />
            </div>
            <ul className="conversations-list">
                {conversations.map(conversation => (
                    <li key={conversation.id} onClick={() => onSelectConversation(conversation)} className="conversation-item">
                        <div className="conversation-avatar">
                            <img src={`https://api.adorable.io/avatars/40/${conversation.id}.png`} alt="avatar" />
                        </div>
                        <div className="conversation-info">
                            <span className="conversation-participants">
                                {conversation.participants.map(participant => participant.username).join(', ')}
                            </span>
                            <span className="conversation-last-message">
                                Last message snippet...
                            </span>
                        </div>
                        <div className="conversation-time">
                            <span>1w</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Conversations;
