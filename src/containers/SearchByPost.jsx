import PostcardList from '../components/common/PostcardList';

export default function SearchByPost() {
  return (
    <div>
      <select name="sort">
        <option value="like">좋아요순</option>
        <option value="date">최신순</option>
      </select>
      <PostcardList />
    </div>
  );
}
