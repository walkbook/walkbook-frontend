import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import MainPage from './pages/MainPage';
import EnrollNewPostPage from './pages/EnrollNewPostPage';
import MyWalkbookPage from './pages/MyWalkbookPage';
import SearchByMapPage from './pages/SearchByMapPage';
import SearchByPostPage from './pages/SearchByPostPage';
import ShowDetailPostPage from './pages/ShowDetailPostPage';
import NotFoundPage from './pages/NotFoundPage';

// styles
import "./styles/reset.scss";
import "./styles/sample.scss";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/newpost" element={<EnrollNewPostPage />} />
        <Route path="/mywalkbook" element={<MyWalkbookPage />} />
        <Route path="/searchmap" element={<SearchByMapPage />} />
        <Route path="/searchpost" element={<SearchByPostPage />} />
        <Route path="/post/:postId" element={<ShowDetailPostPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
