import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { EventContext } from '../context/EventContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { events } = useContext(EventContext);
  const [selectedEventId, setSelectedEventId] = useState('');

  const handleAddEvent = () => {
    navigate('/add');
  };

  const handleEditEvent = () => {
    if (selectedEventId) {
      navigate(`/edit/${selectedEventId}`);
    } else {
      alert("Please select an event to edit");
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEventId) {
      navigate(`/delete/${selectedEventId}`);
    } else {
      alert("Please select an event to delete");
    }
  };

  return (
    <Nav>
      <NavButton onClick={handleAddEvent}>Add Event</NavButton>
      <DropdownContainer>
        <Dropdown
          value={selectedEventId}
          onChange={(e) => setSelectedEventId(e.target.value)}
        >
          <option value="">Select an event</option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.title}
            </option>
          ))}
        </Dropdown>
      </DropdownContainer>
      <NavButton onClick={handleEditEvent}>Edit Event</NavButton>
      <NavButton onClick={handleDeleteEvent}>Delete Event</NavButton>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #333;
`;

const NavButton = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const DropdownContainer = styled.div`
  margin: 0 10px;
`;

const Dropdown = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export default Navbar;
