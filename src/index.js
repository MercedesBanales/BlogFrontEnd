import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCII5Ac16bB9myFJ4lPGQSX9UgLxSQWCgQ",
  authDomain: "my-react-blog-64285.firebaseapp.com",
  projectId: "my-react-blog-64285",
  storageBucket: "my-react-blog-64285.appspot.com",
  messagingSenderId: "49439036740",
  appId: "1:49439036740:web:e8e929e819a943ad323311"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
