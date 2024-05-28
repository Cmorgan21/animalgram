// src/components/ChatApp.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ConversationList from './ConversationList';
import Chat from './Chat';
import CreateConversation from './CreateConversation';
import { axiosReq } from '../api/axiosDefaults';

const ChatApp = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [showCreateConversation, setShowCreateConversation] = useState(false);

  useEffect(() => {
    const fetchConversations = async () => {
      const { data } = await axiosReq.get('/conversations/');
      setConversations(data);
    };

    fetchConversations();
  }, []);

  const handleConversationCreated = (newConversation) => {
    setConversations([...conversations, newConversation]);
    setSelectedConversation(newConversation.id);
    setShowCreateConversation(false);
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Button onClick={() => setShowCreateConversation(!showCreateConversation)}>
            {showCreateConversation ? 'Back to Conversations' : 'New Conversation'}
          </Button>
          {showCreateConversation ? (
            <CreateConversation onConversationCreated={handleConversationCreated} />
          ) : (
            <ConversationList
              onSelectConversation={setSelectedConversation}
              conversations={conversations}
            />
          )}
        </Col>
        <Col md={8}>
          {selectedConversation ? (
            <Chat conversationId={selectedConversation} />
          ) : (
            <p>Select a conversation to start chatting</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ChatApp;
