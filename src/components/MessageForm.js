// src/pages/chat/MessageForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axiosReq from '../../api/axiosDefaults';

const MessageForm = ({ conversationId, onMessageSent }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axiosReq.post('/messages/', {
      conversation: conversationId,
      content,
    });
    setContent('');
    onMessageSent(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="content">
        <Form.Control
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Type a message"
        />
      </Form.Group>
      <Button type="submit">Send</Button>
    </Form>
  );
};

export default MessageForm;
