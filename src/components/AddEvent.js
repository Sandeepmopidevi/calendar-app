import React, { useState, useContext } from 'react';
import { EventContext } from '../context/EventContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
  const { addEvent } = useContext(EventContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!title || !date || !category) {
      alert('Please fill out all fields');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        addEvent({ title, date, description, category });
        navigate('/'); 
      } catch (error) {
        console.error('Error adding event:', error);
        alert('An error occurred while adding the event. Please try again.');
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Add Event</Title>
        <Label>
          Title:
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Label>
        <Label>
          Date:
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </Label>
        <Label>
          Description:
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </Label>
        <Label>
          Category:
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select a category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
          </Select>
        </Label>
        <Button type="submit">Add Event</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default AddEvent;
