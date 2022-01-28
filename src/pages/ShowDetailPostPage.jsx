import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ShowDetailPost from '../containers/ShowDetailPost';

export default function ShowDetailPostPage({ params }) {
  const { postId } = useParams() || params;

  return (
    <>
      <NavBar />
      <ShowDetailPost postId={postId} />
    </>
  );
}
