import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import DaumPostcode from "react-daum-postcode";
import { setLocation } from '../../_actions/user_action';

export default function SearchAddress() {
  const dispatch = useDispatch();
  
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    dispatch(setLocation(data.address));
    setIsOpen(false);
  };

  const handleClickOpenSearchAddress = () => {
    setIsOpen(true);
  }

  const handleClickCloseSearchAddress = () => {
    setIsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClickOpenSearchAddress}
      >
        주소 검색
      </button>

      {/* 팝업 생성 div */}
      <div>
        {isOpen && (
          <>
            <DaumPostcode
              onComplete={handleComplete}
              autoClose
            />
            <button 
              type="button"
              onClick={handleClickCloseSearchAddress}
            >
              닫기
            </button>
          </>
        )}
      </div>
    </>
  );
};
