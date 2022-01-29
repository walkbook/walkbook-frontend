import {
  getPost,
  postEnrollPost,
  postSignin,
  postSignup,
  putEditPost 
} from '../_services/api';
import { clearItem, saveItem, saveObjItem } from '../_services/storage';

// signin
export function setToken(token) {
  return {
    type: 'setToken',
    payload: token,
  };
}

export function setLocation(location) {
  return {
    type: 'setLocation',
    payload: location,
  }
}

export function setSigninUser(userData) {
  return {
    type: 'setSigninData',
    payload: userData,
  }
}

export function setPostInfo(getPostData) {
  return {
    type: 'setPostInfo',
    payload: getPostData,
  }
}

export function signout() {
  clearItem('token');
  clearItem('userData');
  clearItem('userId');
  window.location.href = '/';
  return {
    type: 'signout',
  }
}

export function requestSignin(signinData) {
  return async (dispatch) => {
    // resSigninData <- res.data (객체) (keys: data, msg, success, token)
    const resSigninData = await postSignin(signinData);
    const userData = resSigninData.data;
    const { userId, nickname } = userData;
    
    if (!resSigninData) {
      console.log('확인용 콘솔: 로그인 응답 없음');
      return;
    }
    
    try { 
      dispatch(setSigninUser(userData));
      saveItem('userId', userId);
      saveObjItem('userData', userData);
    } 
    catch(err) {
      console.log('확인용 콘솔: 로그인 시 유저정보 저장 에러', err);
    }

    try { 
      const token = resSigninData.token;
      dispatch(setToken(token));
      saveItem('token', token);
      alert(`${nickname}님! 환영합니다, 워크북입니다!`);
    } 
    catch(err) {
      console.log('확인용 콘솔: 로그인 시 토큰 저장 에러', err);
    }

    // 로그인 시 메인 페이지로
    window.location.href = '/';
  }
} 

// signup
export function requestSignup(signupData) {
  return async (dispatch) => {
    const { username, password } = signupData;
    const resSignupData = await postSignup(signupData);

    if (!resSignupData) {
      alert('다시 시도해 주세요.');
      console.log('확인용 콘솔: 회원가입 응답 없음');
      return;
    }

    try {
      alert('회원가입에 성공했습니다!');
    }
    catch(err) {
      alert('회원가입에 실패했습니다.', err);
    }

    dispatch(requestSignin({ username, password }));
  }
}

// 게시글 하나 보기
export function requestGetPost(postId) {
  return async (dispatch) => {
    const postData = await getPost(postId);
    const getPostData = postData.data;
    dispatch(setPostInfo(getPostData));
  }
}

// 게시글 등록
export function requestEnrollPost(enrollPostData) {
  return async (dispatch) => {
    const postData = await postEnrollPost(enrollPostData);
    const { postId } = postData.data;

    if (!postId) {
      alert('다시 시도해 주세요.');
      console.log('확인용 콘솔: 게시글 등록 실패');
      return;
    }

    try {
      alert('게시글 등록에 성공했습니다!');
    }
    catch(err) {
      alert('게시글 등록에 실패했습니다', err);
    }

    window.location.href = `/post/${postId}`;
    dispatch(requestGetPost(postId));
  }
}

export function requestEditPost(editPostData) {
  return async (dispatch) => {
    const editData = await putEditPost(editPostData);
    const { postId } = editData.data;

    window.location.href = `/post/${postId}`;
    dispatch(requestGetPost(postId));
  }
}
