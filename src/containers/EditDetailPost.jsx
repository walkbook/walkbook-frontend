import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetPost, requestEditPost } from '../_actions/user_action';
import { get } from '../utils/utils';
import { loadItem, loadObjItem } from '../_services/storage';

export default function EditDetailPost({ postId }) {
  const dispatch = useDispatch();
  dispatch(requestGetPost(postId));
  const data = useSelector(get('getPostData'));
  const userId = loadItem('userId');

  const [title, setTitle] = useState(data.title || '');
  const [description, setDescription] = useState(data.description || '');
  const [startLocation, setStartLocation] = useState(data.startLocation || '');
  const [finishLocation, setFinishLocation] = useState(data.finishLocation || '');
  const [tmi, setTmi] = useState(data.tmi || '');

  if (!data) {
    return (
      <p>Loading...</p>
    );
  }

  if (Number(data.authorId) !== Number(userId)) {
    alert('접근 권한이 없습니다.')
    window.location.href = '/';
    return;
  }

  const { nickname } = loadObjItem('userData');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeStartLocation = (event) => {
    setStartLocation(event.target.value);
  };

  const handleChangeFinishLocation = (event) => {
    setFinishLocation(event.target.value);
  };

  const handleChangeTmi = (event) => {
    setTmi(event.target.value);
  };

  const validateEditPost = (
    title,
    description,
    startLocation,
    finishLocation,
    tmi
  ) => {
    const isValidForm = {
      isValid: false,
    }
    if (!title) {
      return alert('산책로 이름을 입력해주세요!');
    } else if (!description) {
      return alert('산책로 설명을 입력해주세요!');
    } else if (!startLocation) {
      return alert('출발 위치를 입력해주세요!');
    } else if (!finishLocation) {
      return alert('도착 위치를 입력해주세요!');
    } else if (!tmi) {
      return alert('산책로 TMI를 입력해주세요!');
    } else {
      isValidForm.isValid = true;
    }
    return isValidForm.isValid;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEditPost(
      title,
      description,
      startLocation,
      finishLocation,
      tmi
    )) {
      return;
    }
    
    const requestBody = {
      title,
      description,
      startLocation,
      finishLocation,
      tmi
    };
    dispatch(requestEditPost(requestBody, postId));
  };

  return (
    <>
      <div className='sample_title'>산책로 수정</div>

      <label>작성자</label>
      <input 
        type="text" 
        value={nickname}
        readOnly
      />

      <br /> 

      <label>산책로 이름</label>
      <input 
        type="text" 
        value={title}
        placeholder="산책로의 특징을 담은 이름을 입력해주세요." 
        onChange={handleChangeTitle}
      />

      <br />

      <label>산책로 한 줄 소개</label>
      <input 
        type="text" 
        value={description}
        placeholder="해당 산책로의 특징을 소개해주세요."
        onChange={handleChangeDescription}
      />

      <br /> 

      <label>출발위치</label>
      <input 
        type="text" 
        value={startLocation}
        placeholder="출발 위치를 입력해주세요." 
        onChange={handleChangeStartLocation}
      />

      <br /> 

      <label>도착위치</label>
      <input 
        type="text" 
        value={finishLocation}
        placeholder="도착 위치를 입력해주세요." 
        onChange={handleChangeFinishLocation}
      />

      <br /> 

      <label>TMI</label>
      <input 
        type="text" 
        value={tmi}
        placeholder="TMI를 입력해주세요."
        onChange={handleChangeTmi}
      />

      <br />

      <button
        type="button"
        className='sample_button'
        onClick={handleSubmit}
      >
        등록하기
      </button>
    </>
  );
}