import axios from 'axios';

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
  try {
    const url = 'api/post/create';
    const res = await axios.post(url, enrollPostData);
    return res.data;
  }
  catch(err) {
    alert(err.response.data.msg);
  }
}