import React from 'react';
import { useSelector } from 'react-redux';
import { get } from '../utils/utils';

export default function EnrollNewPost() {
  // const { nickname } = useSelector(get('userData'));
  // console.log(nickname);
  return (
    <>
      <div className='sample_title'>산책로 등록</div>
      <div className='sample_announce'>안내문</div>
      <div className='sample_map'>맵</div>
      <label>작성자</label>
      <input 
        type="text" 
        // value={nickname}
        readOnly
      />

      <br /> 

      <label>산책로 이름</label>
      <input 
        type="text" 
        placeholder="산책로의 특징을 담은 이름을 입력해주세요." 
      />

      <br /> 

      <label>산책로 한 줄 소개</label>
      <input 
        type="text" 
        placeholder="해당 산책로의 특징을 소개해주세요." 
      />

      <br /> 

      <label>출발위치</label>
      <input 
        type="text" 
        placeholder="출발 위치를 입력해주세요." 
      />

      <br /> 

      <label>도착위치</label>
      <input 
        type="text" 
        placeholder="도착 위치를 입력해주세요." 
      />

      <br /> 

      <label>TMI</label>
      <input 
        type="text" 
        placeholder="TMI를 입력해주세요." 
      />

      <br />

      <button
        type="button"
        className='sample_button'
      >
        등록하기
      </button>
    </>
  );
}