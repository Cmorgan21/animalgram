import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ConversationList from './ConversationList';
import Chat from './Chat';

const ChatApp = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <Container>
      <Row>
        <Col md={4}>
          <ConversationList onSelectConversation={setSelectedConversation} />
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
