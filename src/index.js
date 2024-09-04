import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { EventProvider } from './context/EventContext';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <EventProvider>
      <GlobalStyles />
      <App />
    </EventProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
