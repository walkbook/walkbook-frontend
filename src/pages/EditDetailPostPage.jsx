import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import EditDetailPost from '../containers/EditDetailPost';

export default function EditDetailPostPage({ params }) {
  const { postId } = useParams() || params;

  return (
    <>
      <NavBar />
      <EditDetailPost postId={postId} />
    </>
  );
}
