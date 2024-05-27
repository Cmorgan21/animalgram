import React, { useEffect, useState } from 'react';
import { getMessages, sendMessage } from '../api/api';

const Messages = ({ conversationId }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const data = await getMessages(conversationId);
                setMessages(data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, [conversationId]);

    const handleSend = async () => {
        try {
            const message = { content: newMessage };
            const sentMessage = await sendMessage(conversationId, message);
            setMessages([...messages, sentMessage]);
            setNewMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <h1>Messages</h1>
            <ul>
                {messages.map(message => (
                    <li key={message.id}>
                        <strong>{message.sender.username}:</strong> {message.content}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Messages;
