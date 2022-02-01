import React from 'react';
import KeywordSearchBar from '../components/KeywordSearchBar';
import NavBar from '../components/NavBar';
import SearchByPost from '../containers/SearchByPost';

export default function SearchByPostPage() {
  return (
    <>
      <NavBar />
      <KeywordSearchBar />
      <SearchByPost />
    </>
  );
}
