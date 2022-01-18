// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import SearchAddress from '../components/common/SearchAddress';
// import { requestSignup } from '../_actions/user_action';

// export default function SignupPage(props) {
//   const dispatch = useDispatch();

//   // 회원가입 signupValidation
//   const signupValidation = {
//     isInputs: true,
//     isSignup: true,
//   };

//   const isInputhandler = (elem) => {
//     if (!elem) {
//       signupValidation.isInputs = false;
//     }
//   }

//   // state 가져오기
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [nickname, setNickname] = useState('');
//   const [gender, setGender] = useState('');
//   const [age, setAge] = useState('');
//   const [location, setLocation] = useState('');
//   const [introduction, setIntroduction] = useState('');
//   const [address, setAddress] = useState('');


//   // 유효성 검사
//   const [isUsername, setIsUsername] = useState(false);
//   const [isPassword, setIsPassword] = useState(false);
//   const [isConfirmPassword, setIsConfirmPassword] = useState(false);

//   // handler 함수들
//   const onUsernameHandler = (event) => {
//     setUsername(event.target.value);
//     isInputhandler(username);
//   };

//   const onPasswordHandler = (event) => {
//     setPassword(event.target.value);
//     isInputhandler(password);

//   };

//   const onConfirmPasswordHandler = (event) => {
//     setConfirmPassword(event.target.value);
//     isInputhandler(confirmPassword);
//   };

//   const onNicknameHandler = (event) => {
//     setNickname(event.target.value);
//     isInputhandler(nickname);
//   };

//   const onGenderHandler = event => {
//     setGender(event.target.value);
//     isInputhandler(gender);
//   }

//   const onAgeHandler = event => {
//     setAge(event.target.value);
//     isInputhandler(age);
//   }

//   const onLocationHandler = event => {
//     setLocation(event.target.value);
//     isInputhandler(location);
//   }

//   const onIntroductionHandler = event => {
//     setIntroduction(event.target.value);
//     isInputhandler(introduction);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // 모든 인풋창 입력 조건
//     if (!(signupValidation.isInputs)) {
//       signupValidation.isSignup = false;
//       return alert('모든 항목을 입력해주세요.');
//     }
    
//     // 아이디 중복체크
//     if (false) {
//       signupValidation.isSignup = false;
//       return alert('해당 아이디가 이미 존재합니다.');
//     }
    
//     // 중복검사 전 값과 중복검사 후 인풋값이 다른 경우 -> 다시 중복검사 하게
//     if (false) {
//       signupValidation.isSignup = false;
//     }

//     if (password !== confirmPassword) {
//       signupValidation.isSignup = false;
//     }

//     const requestBody = {
//       username,
//       password,
//       nickname,
//       gender,
//       age,
//       location,
//       introduction,
//     };

//     // action을 dispatch해준다.
//     dispatch(requestSignup(requestBody));
//   };

//   // br 태그 flex box 사용해 바꾸기
//   return (
//     <>
        
//         <label>아이디</label>
//         <input 
//           type="text" 
//           value={username} 
//           placeholder="(필수입력) 아이디를 입력해주세요." 
//           onChange={onUsernameHandler} 
//         />
//         <input type="button" value="중복확인" />
        
//         <br />

//         <label>비밀번호</label>
//         <input 
//           type="password" 
//           value={password} 
//           placeholder="4자리 이상의 숫자 또는 대소문자를 입력하세요." 
//           onChange={onPasswordHandler} 
//         />

//         <br />

//         <label>비밀번호 확인</label>
//         <input 
//           type="password" 
//           value={confirmPassword} 
//           placeholder="4자리 이상의 숫자 또는 대소문자를 입력하세요." 
//           onChange={onConfirmPasswordHandler} 
//         />

//         <br />

//         <label>닉네임</label>
//         <input 
//           type="text" 
//           value={nickname} 
//           placeholder="닉네임을 설정해주세요." 
//           onChange={onNicknameHandler} 
//         />

//         <br />

//         <label>성별 선택</label>
//         <select 
//           name="gender"
//           onChange={onGenderHandler} 
//         >
//           <option value="">선택</option>
//           <option value="M">남자</option>
//           <option value="F">여자</option>
//           <option value="U">선택안함</option>
//         </select>

//         <br />

//         <label>나이대 선택</label>
//         <select 
//           name="age"
//           onChange={onAgeHandler} 
//         >
//           <option value="">선택</option>
//           <option value="0">10세 미만</option>
//           <option value="10">10대</option>
//           <option value="20">20대</option>
//           <option value="30">30대</option>
//           <option value="40">40대</option>
//           <option value="50">50대</option>
//           <option value="60">60대 이상</option>
//           <option value="U">선택안함</option>
//         </select>

//         <br />

//         <label>내 위치 설정</label>
//         <input 
//           type="text" 
//           value={location}
//           placeholder="주로 활동하는 위치를 입력해주세요!"
//           onChange={onLocationHandler}
//         />
//         <SearchAddress address={address} setAddress={setAddress} />

//         <br />

//         <label>한 줄 소개글</label>
//         <input 
//           type="text" 
//           value={introduction} 
//           placeholder="간단한 소개를 해주세요." 
//           onChange={onIntroductionHandler} 
//         />
      
//         <br />

//         <button 
//           type="submit"
//           onClick={handleSubmit}
//         >
//           SIGN UP
//         </button>

//     </>
//   );
// }
