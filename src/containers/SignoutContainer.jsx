import React from 'react';

export default function SignoutContainer({ onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className='navbar_3'
    >
      로그아웃
    </button>
  )
}
