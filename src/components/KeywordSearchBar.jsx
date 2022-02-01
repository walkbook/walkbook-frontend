export default function KeywordSearchBar() {
  return (
    <>
      <select name="type">
        <option value="all">전체</option>
        <option value="title">제목</option>
        <option value="titleContent">제목+내용</option>
      </select>
      <input type="text" />
      <button className="sample_button" type="submit">찾기</button>
    </>
  )
}
