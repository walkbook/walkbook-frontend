import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <>
      <p>WalkBook : 메인 페이지</p>
      <Link to="/signin">로그인</Link>

      <br />

      <Link to="/signup">회원가입</Link>
    </>
  );
}
