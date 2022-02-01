import { useDispatch, useSelector } from 'react-redux';
import {
  requestGetPost,
  requestDeletePost
} from '../_actions/user_action';
import { get } from '../utils/utils';
import { loadItem } from '../_services/storage';
import { useNavigate } from 'react-router-dom';

export default function ShowDetailPost({ postId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(requestGetPost(postId));
  const data = useSelector(get('getPostData'));
  const userId = loadItem('userId');

  if (!data) {
    return (
      <p>Loading...</p>
    );
  }

  const handleEdit = () => {
    navigate(`/post/${postId}/edit`);
  }

  const handleDelete = () => {
    dispatch(requestDeletePost(postId));
    navigate(`/searchpost`);
  }

  return (
    <div>
      {Number(data.authorId) === Number(userId) ? (
        <>
          <button type="button" onClick={handleEdit} className='sample_button'>수정</button>
          <button type="button" onClick={handleDelete} className='sample_button'>삭제</button>
        </>
      ) : (
        <>
        </>
      )}
      <div>
        <h1>{data.title}</h1>
        <h5>{data.description}</h5>
        <div><button>like</button>2</div>
        <div>comment 2</div>
      </div>
      <div>
        <div>
          <label>작성자</label>
          <span>{data.authorName}</span>
        </div>
        <div>
          <label>작성일시</label>
          <span>{data.createdDate}</span>
        </div>
        <div>
          <label>출발위치</label>
          <span>{data.startLocation}</span>
        </div>
        <div>
          <label>도착위치</label>
          <span>{data.finishLocation}</span>
        </div>
        <div>
          <label>TMI</label>
          <span>{data.tmi}</span>
        </div>
      </div>
    </div>
  );
}
