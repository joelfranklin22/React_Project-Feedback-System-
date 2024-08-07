// index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './User.css'; // for additional custom styles
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { FeedbackProvider } from './FeedbackContext';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </Provider>,
  document.getElementById('root')
);
