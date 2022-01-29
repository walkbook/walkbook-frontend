import { useDispatch, useSelector } from 'react-redux';
import { requestGetPost } from '../_actions/user_action';
import { get } from '../utils/utils';
import { loadItem } from '../_services/storage';
import { Link } from 'react-router-dom';

export default function ShowDetailPost({ postId }) {
  const dispatch = useDispatch();
  dispatch(requestGetPost(postId));
  const data = useSelector(get('getPostData'));
  const userId = loadItem('userId');

  if (!data) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div>
      {Number(data.authorId) === Number(userId) ? (
        <>
          <Link to="/post/:postId/edit">수정</Link>
          {/* <Link to="/post/:postId/delete">삭제</Link> */}
        </>
      ) : (
        <>
        </>
      )}
      <div>
        <h1>{data.title}</h1>
        <h5>{data.des}</h5>
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
