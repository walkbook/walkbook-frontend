import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadItem } from '../_services/storage';
import SignoutContainer from '../containers/SignoutContainer';
import { 
  signout,
} from '../_actions/user_action';

export default function NavBar() { 
  const dispatch = useDispatch();

  const token = loadItem('token');

  function handleClickSignout() {
    dispatch(signout());
  }
    
  return (
    <div className='navbar'>
      <div className='navbar_1'>
        <div className='navbar_2'>
          <Link to="/" className='navbar_3'>Home</Link>
        </div>
        <div className='navbar_2'>
          <Link to="/searchmap" className='navbar_3'>지도로 보기</Link>
          <Link to="/searchpost" className='navbar_3'>게시판으로 보기</Link>
        </div>
      </div>

      {token ? (
        <div className='navbar_2'>
          <Link to="/newpost" className='navbar_3'>산책로 등록</Link>
          <Link to="/mywalkbook" className='navbar_3'>나의 워크북</Link>
          <SignoutContainer onClick={handleClickSignout} />
        </div>
      ) : (
        <div className='navbar_2'>
          <Link to="/signin" className='navbar_3'>로그인</Link>
          <Link to="/signup" className='navbar_3'>회원가입</Link>
        </div>
      )}
    </div>
  )
}
