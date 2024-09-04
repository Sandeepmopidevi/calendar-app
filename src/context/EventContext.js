import React, { useState, createContext } from 'react';
export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [categoryFilter, setCategoryFilter] = useState('');

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        selectedDate,
        setSelectedDate,
        categoryFilter,
        setCategoryFilter,
        addEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
