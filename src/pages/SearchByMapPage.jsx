import React from 'react';
import KeywordSearchBar from '../components/KeywordSearchBar';
import NavBar from '../components/NavBar';
import SearchByMap from '../containers/SearchByMap';

export default function SearchByMapPage() {
  return (
    <>
      <NavBar />
      <KeywordSearchBar />
      <SearchByMap />
    </>
  );
}
