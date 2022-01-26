import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestSignin } from '../_actions/user_action';
import { Link } from 'react-router-dom';

export default function SigninContainer() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = {
      username,
      password,
    };
    dispatch(requestSignin(requestBody));
  };

  return (
    <>
      <label>아이디</label>
      <input 
        type="text" 
        value={username}
        placeholder="아이디를 입력해주세요" 
        onChange={handleChangeUsername} 
      />
      
      <br />

      <label>비밀번호</label>
      <input 
        type="password" 
        value={password} 
        placeholder="비밀번호를 입력해주세요" 
        onChange={handleChangePassword} 
      />
      
      <br />

      <button 
        type="submit"
        onClick={handleSubmit}
        className='sample_button'
      >
        SIGN IN
      </button>
      
      <br />

      <Link to="/signup">회원가입 하러가기</Link>
    </>
  );
}
