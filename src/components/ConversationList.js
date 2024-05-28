import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { axiosReq } from '../api/axiosDefaults';

const ConversationList = ({ onSelectConversation }) => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      const { data } = await axiosReq.get('/conversations/');
      setConversations(data);
    };

    fetchConversations();
  }, []);

  return (
    <ListGroup>
      {conversations.map(conversation => (
        <ListGroup.Item
          key={conversation.id}
          action
          onClick={() => onSelectConversation(conversation.id)}
        >
          {conversation.participants.join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ConversationList;
