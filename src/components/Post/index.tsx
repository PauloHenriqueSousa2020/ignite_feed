// libs
import { FormEvent, useState } from 'react';
import moment from "moment";
import 'moment/locale/pt-br';  // para português do Brasil

// components
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

// styles
import * as S from './styles';

interface PostProps {
  post: {
    id: number,
    name: string,
    avatarUrl: string,
    role: string,
    dateTime: string,
    content: string,
    comments:
    {
      name: string,
      avatarUrl: string,
      dateTime: string,
      comment: string
    }[]
  }
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(post.comments);
  const [comment, setComment] = useState({
    name: "Paulo Henrique",
    avatarUrl: "https://github.com/PauloHenriqueSousa2020.png",
    dateTime: moment().toString(),
    comment: ""
  });

  function handleAddNewComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setComments([...comments, comment]);
    setComment({ ...comment, comment: "" });
  }

  function handleRemoveComment(removedComment: string) {
    setComments(comments.filter(comment => comment.comment !== removedComment));
  }

  return (
    <S.Container>
      <div className='wrapper'>
        <div className='header'>
          <Avatar src={post.avatarUrl} alt="" />
          <div>
            <strong>{post.name}</strong>
            <span>{post.role}</span>
          </div>
        </div>
        <label>            
           {moment(post.dateTime).fromNow()}
        </label>
      </div>
      <div className='content'>
        {post.content}
      </div>
      <form onSubmit={handleAddNewComment} className='commentForm'>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Escreva um comentário...'
          value={comment.comment}
          onChange={(e) => setComment({ ...comment, comment: e.target.value })}
        />

        <footer>
          <button type='submit'>
            Publicar
          </button>
        </footer>
      </form>
      {comments.map(comment => (
        <Comment key={comment.comment} comment={comment} handleRemoveComment={handleRemoveComment} />
      ))}
    </S.Container>
  )
}