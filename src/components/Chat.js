// src/pages/chat/Chat.js
import React, { useEffect, useState } from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';
import { axiosReq } from '../api/axiosDefaults';

const Chat = ({ conversationId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await axiosReq.get(`/conversations/${conversationId}/`);
      setMessages(data.messages);
    };

    fetchMessages();
  }, [conversationId]);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const { data } = await axiosReq.post('/messages/', {
        conversation: conversationId,
        content: newMessage,
      });
      setMessages([...messages, data]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <ListGroup>
        {messages.map(message => (
          <ListGroup.Item key={message.id}>
            <strong>{message.sender}</strong>: {message.content}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form>
        <Form.Group controlId="message">
          <Form.Control
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
          />
        </Form.Group>
        <Button onClick={handleSendMessage}>Send</Button>
      </Form>
    </div>
  );
};

export default Chat;
