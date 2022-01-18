import React from 'react';

export default function SignoutContainer({ onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
    >
      SIGN OUT
    </button>
  )
}
