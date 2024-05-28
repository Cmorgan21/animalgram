import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { axiosReq } from '../api/axiosDefaults';
import UserSearch from './UserSearch';

const CreateConversation = ({ onConversationCreated }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSelectUser = (username) => {
    setSelectedUsers([...selectedUsers, username]);
  };

  const handleCreateConversation = async () => {
    if (selectedUsers.length > 0) {
      try {
        const { data } = await axiosReq.post('/conversations/', {
          participants: selectedUsers,
        });
        onConversationCreated(data);
      } catch (error) {
        console.error("Failed to create conversation:", error);
      }
    }
  };

  return (
    <div>
      <UserSearch onSelectUser={handleSelectUser} />
      <div>
        <h5>Selected Users:</h5>
        <ul>
          {selectedUsers.map(user => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
      <Button onClick={handleCreateConversation} disabled={selectedUsers.length === 0}>
        Start Conversation
      </Button>
    </div>
  );
};

export default CreateConversation;
