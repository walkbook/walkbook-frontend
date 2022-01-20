import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from './_actions/user_action';
import { loadItem } from './_services/storage';

// components
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

// styles
import "./styles/reset.scss";

export default function App() {
  const dispatch = useDispatch();
  const token = loadItem('token');

  if (token) {
    dispatch(setToken(token));
  }
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
