import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import styled from 'styled-components';

const EditEvent = () => {
  const { id } = useParams();
  const { events, editEvent } = useContext(EventContext);
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);

  const [title, setTitle] = useState(event?.title || '');
  const [date, setDate] = useState(event?.date || '');
  const [description, setDescription] = useState(event?.description || '');
  const [category, setCategory] = useState(event?.category || '');

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDate(event.date);
      setDescription(event.description);
      setCategory(event.category);
    }
  }, [event]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date && category) {
      const updatedEvent = { id, title, date, description, category };
      editEvent(updatedEvent);
      navigate('/');
    } else {
      alert('Please fill out all fields');
    }
  };

  if (!event) return <p>Event not found</p>;

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Edit Event</Title>
        <Label>
          Title:
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Label>
        <Label>
          Date:
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Label>
        <Label>
          Description:
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Label>
        <Label>
          Category:
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
          </Select>
        </Label>
        <Button type="submit">Update Event</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  margin: 20px auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const Label = styled.label`
  margin-bottom: 15px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  resize: vertical;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default EditEvent;
