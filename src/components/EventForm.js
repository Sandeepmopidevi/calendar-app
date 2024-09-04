import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import styled from 'styled-components';

const EventForm = () => {
  const { events, addEvent, editEvent } = useContext(EventContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Work');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const event = events.find((event) => event.id === parseInt(id));
      if (event) {
        setTitle(event.title);
        setDate(event.date);
        setDescription(event.description);
        setCategory(event.category);
      }
    }
  }, [id, events]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { id: id ? parseInt(id) : Date.now(), title, date, description, category };
    id ? editEvent(newEvent) : addEvent(newEvent);
    navigate('/');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <Textarea
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Other">Other</option>
      </Select>
      <Button type="submit">{id ? 'Update Event' : 'Add Event'}</Button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
`;

const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  height: 100px;
`;

const Select = styled.select`
  margin-bottom: 15px;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default EventForm;
