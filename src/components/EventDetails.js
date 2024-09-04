import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { EventContext } from '../context/EventContext';
import Modal from './Modal';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, deleteEvent } = useContext(EventContext);

  const event = events.find((e) => e.id === id);

  if (!event) {
    return <p>Event not found</p>;
  }

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    deleteEvent(id);
    navigate('/');
  };

  return (
    <Modal>
      <Container>
        <Title>{event.title}</Title>
        <Date>{new Date(event.date).toDateString()}</Date>
        <Description>{event.description}</Description>
        <Category>{event.category}</Category>
        <ButtonContainer>
          <EditButton onClick={handleEdit}>Edit</EditButton>
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  color: #333;
`;

const Date = styled.p`
  margin-bottom: 15px;
  color: #777;
`;

const Description = styled.p`
  margin-bottom: 20px;
  line-height: 1.6;
`;

const Category = styled.span`
  display: inline-block;
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  font-size: 14px;
  color: #555;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EditButton = styled.button`
  padding: 10px 20px;
  background-color: #ffc107;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0a800;
  }
`;

const DeleteButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c82333;
  }
`;

export default EventDetails;
