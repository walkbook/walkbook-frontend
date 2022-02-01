import { useNavigate } from 'react-router-dom';


export default function Postcard({ postId, title, authorName, description }) {
  const navigate = useNavigate();
  
  const handleGetPost = () => {
    navigate(`/post/${postId}`);
  }

  return (
    <>
      <div className='sample_card'>
        <div className='sample_card_title'>
          <div>
          <button 
            type="button" 
            onClick={handleGetPost}
          >
            {title}
          </button>
          </div>
          <div>{authorName}</div>
        </div>
        <div className='sample_card_content'>
          <label>소개</label>
          <div className='sample_card_content_elem'>{description}</div>
          <div><button>like</button>2</div>
          <div>comment 2</div>
        </div>
      </div>
    </>
  )
}
