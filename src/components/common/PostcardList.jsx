import Postcard from './Postcard';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../../utils/utils';
import { requestPostPage } from '../../_actions/user_action';

export default function PostcardList() {
  const dispatch = useDispatch();
  // page, size, sort 관련된 것 불러와주기 아마도 container이나 page에서 내려줘야..?! 
  const page = 0
  const size = 8
  const sort = 'createdDate';
  dispatch(requestPostPage(page, size, sort));
  const pageContent = useSelector(get('pageContent'));
  
  if (!pageContent) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      {pageContent.map((post) => (
        <Postcard
          key={post.postId}
          postId={post.postId}
          title={post.title}
          authorName={post.authorName}
          description={post.description}
        />
      ))}
    </>
  )
}
