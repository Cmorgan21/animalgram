import React, { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import { axiosReq } from '../api/axiosDefaults';

const UserSearch = ({ onSelectUser }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      const { data } = await axiosReq.get(`/search/users/?q=${query}`);
      setResults(data);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="query">
          <Form.Control
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search users"
          />
        </Form.Group>
      </Form>
      <ListGroup>
        {results.map(user => (
          <ListGroup.Item key={user} action onClick={() => onSelectUser(user)}>
            {user}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserSearch;
