import { postSignin, postSignup } from '../_services/api';
import { clearItem, saveItem } from '../_services/storage';

// signin
export function setToken(token) {
  return {
    type: 'setToken',
    payload: token,
  };
}

export function setSigninUser(userData) {
  return {
    type: 'setSigninData',
    payload: userData,
  }
}

export function signout() {
  clearItem('token');
  return {
    type: 'signout',
  }
}

export function requestSignin(signinData) {
  return async (dispatch) => {
    // resSigninData <- res.data (객체) (keys: data, msg, success, token)
    const resSigninData = await postSignin(signinData);
    const userData = resSigninData.data;
    const { nickname } = userData;

    
    if (!resSigninData) {
      console.log('확인용 콘솔: 로그인 응답 없음');
      return;
    }
    
    // 로그인 시 메인 페이지로 꽂아주기
    // window.location.href = '/';

    console.log('확인용 콘솔', resSigninData);

    // Q. 유저 부분, 필요할까?
    try { 
      dispatch(setSigninUser(userData));
    } 
    catch(err) {
      console.log('확인용 콘솔: 로그인 시 유저정보 저장 에러', err);
    }

    try { 
      const token = resSigninData.token;
      console.log('확인용 콘솔', token);
      dispatch(setToken(token));
      saveItem('token', token);
      alert(`${nickname}님! 환영합니다, 워크북입니다!`);
    } 
    catch(err) {
      console.log('확인용 콘솔: 로그인 시 토큰 저장 에러', err);
    }
  }
} 

export function requstSignup(signupData) {
  return async (dispatch) => {
    const userData = await postSignup(signupData);

    if (!userData) {
      console.log('확인용 콘솔: 회원가입 응답 없음');
      return;
    }

    // 회원가입 시 로그인 페이지로 꽂아주기
    window.location.href = '/signin';

    try {
      alert('회원가입에 성공했습니다! \n로그인 후 이용해주세요.');
    }
    catch(err) {
      alert('회원가입에 실패했습니다.', err);
    }
  }
}