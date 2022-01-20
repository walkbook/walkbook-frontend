import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchAddress from '../components/common/SearchAddress';
import { requestSignup } from '../_actions/user_action';
import { Link } from 'react-router-dom';
import { get } from '../utils/utils';

export default function SignupPage() {
  const dispatch = useDispatch();

  const location = useSelector(get('location'))
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [introduction, setIntroduction] = useState('');

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  }

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  }

  const handleChangeLocation = () => {
    return;
  }

  const handleChangeIntroduction = (event) => {
    setIntroduction(event.target.value);
  }

  const validateSignup = (
    username,
    password,
    confirmPassword,
    nickname,
    gender,
    age,
    location,
    introduction
  ) => {
    const isValidForm = {
      isValid: false,
    }
    if (!username) {
      return alert('이름(ID)을 입력해주세요.');
    } else if (!password) {
      alert('비밀번호를 입력해주세요.');
    } else if (password.length < 4) {
      alert('비밀번호는 4자리 이상이어야 합니다.')
    } else if (password !== confirmPassword) {
      alert('비밀번호 확인이 일치하지 않습니다.');
    } else if (!nickname) {
      alert('닉네임을 입력해주세요.');
    } else if (!gender) {
      alert('성별을 선택해주세요.');
    } else if (!age) {
      alert('연령대를 선택해주세요.');
    } else if (!location) {
      alert('주로 활동하는 위치를 입력해주세요.');
    } else if (!introduction) {
      alert('소개글을 입력해주세요.');
    } else {
      isValidForm.isValid = true;
    } 
    return isValidForm.isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateSignup(
      username,
      password,
      confirmPassword,
      nickname,
      gender,
      age,
      location,
      introduction
    )) {
      return;
    }
    const requestBody = {
      username,
      password,
      nickname,
      gender,
      age,
      location,
      introduction,
    };
    dispatch(requestSignup(requestBody));
  };

  // br태그 flexbox로 바꿀 것
  return (
    <>
      <label>아이디</label>
      <input 
        type="text" 
        value={username} 
        placeholder="(필수입력) 아이디를 입력해주세요." 
        onChange={handleChangeUsername} 
      />
      
      <br />

      <label>비밀번호</label>
      <input 
        type="password" 
        value={password} 
        placeholder="4자리 이상의 숫자 또는 대소문자를 입력하세요." 
        onChange={handleChangePassword} 
      />

      <br />

      <label>비밀번호 확인</label>
      <input 
        type="password" 
        value={confirmPassword} 
        placeholder="4자리 이상의 숫자 또는 대소문자를 입력하세요." 
        onChange={handleChangeConfirmPassword} 
      />

      <br />

      <label>닉네임</label>
      <input 
        type="text" 
        value={nickname} 
        placeholder="닉네임을 설정해주세요." 
        onChange={handleChangeNickname} 
      />

      <br />

      <label>성별 선택</label>
      <select 
        name="gender"
        onChange={handleChangeGender} 
      >
        <option value="">선택</option>
        <option value="M">남자</option>
        <option value="F">여자</option>
        <option value="U">선택안함</option>
      </select>

      <br />

      <label>나이대 선택</label>
      <select 
        name="age"
        onChange={handleChangeAge} 
      >
        <option value="">선택</option>
        <option value="0">10세 미만</option>
        <option value="10">10대</option>
        <option value="20">20대</option>
        <option value="30">30대</option>
        <option value="40">40대</option>
        <option value="50">50대</option>
        <option value="60">60대 이상</option>
        <option value="U">선택안함</option>
      </select>

      <br />

      <label>내 위치 설정</label>
      <input 
        type="text" 
        value={location || ''}
        placeholder="주로 활동하는 위치는 어디인가요? 검색해주세요."
        onChange={handleChangeLocation} 
        readOnly
      />
      <SearchAddress />

      <br />

      <label>한 줄 소개글</label>
      <input 
        type="text" 
        value={introduction} 
        placeholder="간단한 소개를 해주세요." 
        onChange={handleChangeIntroduction} 
      />
    
      <br />

      <button 
        type="submit"
        onClick={handleSubmit}
      >
        SIGN UP
      </button>

      <br />

      <Link to="/signin">이미 워크북 유저신가요?</Link>
    </>
  );
}
