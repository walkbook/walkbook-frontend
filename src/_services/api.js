import axios from 'axios';
import { loadItem } from './storage';

export async function postSignin(signinData) {
  try {
    const url = '/api/user/signin';
    const res = await axios.post(url, signinData);
    return res.data;
  } 
  catch(err) {
    alert(err.response.data.msg);
  }
}

export async function postSignup(signupData) {
  try {
    const url = '/api/user/signup';
    const res = await axios.post(url, signupData);
    return res.data;
  } 
  catch(err) {
    alert(err.response.data.msg);
  }
}

export async function postEnrollPost(enrollPostData) {
  const token = loadItem('token');

  try {
    const url = '/api/post/create';
    const res = await axios.post(url, enrollPostData, {
      headers: {
        'X-AUTH-TOKEN': token,
      }
    });
    return res.data;
  }
  catch(err) {
    alert(err.response.data.msg);
  }
}

export async function getPost(postId) {
  try {
    const url = `/api/post/${postId}`;
    const res = await axios.get(url);
    return res.data;
  }
  catch(err) {
    alert(err.response.data.msg);
  }
}

export async function putEditPost(editPostData, postId) {
  const token = loadItem('token');

  try {
    const url = `/api/post/${postId}/edit`;
    const res = await axios.put(url, editPostData, {
      headers: {
        'X-AUTH-TOKEN': token,
      }
    });
    return res.data;
  }
  catch(err){
    alert(err.response.data.msg);
  }
}
