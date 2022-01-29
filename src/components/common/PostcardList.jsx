import Postcard from './Postcard';

export default function PostcardList() {
  return (
    <Postcard 
      postId={postId}
      title={title}
      authorName={authorName}
      description={description}
    />
  )
}
