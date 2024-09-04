import React, { useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { EventContext } from '../context/EventContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Filter from './Filter';

const CalendarView = () => {
  const { events, selectedDate, setSelectedDate, categoryFilter } = useContext(EventContext);

  const onDateChange = (date) => {
    if (setSelectedDate) {
      setSelectedDate(date);
    } else {
      console.error('setSelectedDate function is not defined');
    }
  };

  const filteredEvents = events.filter((event) => {
    if (event && event.date && selectedDate) {
      const eventDate = new Date(event.date);
      if (!isNaN(eventDate) && !isNaN(new Date(selectedDate))) {
        return (
          (!categoryFilter || event.category === categoryFilter) &&
          eventDate.toDateString() === selectedDate.toDateString()
        );
      }
    }
    return false;
  });

  return (
    <Container>
      <Filter />
      <StyledCalendar onChange={onDateChange} value={selectedDate} />
      <EventList>
        {filteredEvents.length ? (
          filteredEvents.map((event) => (
            <EventItem key={event.id}>
              <EventLink to={`/event/${event.id}`}>{event.title}</EventLink>
            </EventItem>
          ))
        ) : (
          <NoEvents>No events for this day.</NoEvents>
        )}
      </EventList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StyledCalendar = styled(Calendar)`
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
`;

const EventList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const EventItem = styled.li`
  margin: 10px 0;
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const EventLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: 500;
  display: block;
`;

const NoEvents = styled.p`
  font-size: 16px;
  color: #777;
`;

export default CalendarView;
