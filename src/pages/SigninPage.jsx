import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  requestSignin,
  signout,
} from '../_actions/user_action';
import { Link } from 'react-router-dom';
import { get } from '../utils/utils';
import SignoutContainer from '../containers/SignoutContainer';

export default function SigninPage() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // 토큰 필요할 때마다 가져옴
  const token = useSelector(get('token'));

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  function handleClickSignout() {
    dispatch(signout());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = {
      username,
      password,
    };
    dispatch(requestSignin(requestBody));
  };
  
  // br태그 flexbox로 바꿀 것
  return (
    <>
      {token ? (
        <SignoutContainer onClick={handleClickSignout} />
      ) : (
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
          >
            SIGN IN
          </button>
          
          <br />

          <Link to="/signup">회원가입 하러가기</Link>
        </>
      )}
    </>
  );
}
