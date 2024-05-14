// libs
import { useState } from "react";
import moment from "moment";
moment.locale('pt-br');

// components
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";

// styles
import * as S from "./styles";

interface CommentProps {
  comment: {
    name: string,
    avatarUrl: string,
    dateTime: string,
    comment: string
  }
  handleRemoveComment: (comment: string) => void;
}

export function Comment({ comment, handleRemoveComment }: CommentProps) {
  const [likes, setLikes] = useState(0);

  return (
    <S.Container>
      <Avatar src={comment.avatarUrl} alt="" hasBorder={false} />

      <div className="section">
        <div className="content">
          <div className="wrapper">
            <div className="wrapperHeader">
              <strong>{comment.name}</strong>
              <span>{moment(comment.dateTime).fromNow()}</span>
            </div>
            <button onClick={() => handleRemoveComment(comment.comment)} className="trashButton" title="Deletar comentário">
              <Trash size={18} />
            </button>
          </div>

          <p className="comment">
            {comment.comment}
          </p>
        </div>
        <button onClick={() => setLikes(likes + 1)} className="thumbsButton" title="Aplaudir comentário">
          <ThumbsUp size={18} />
          Aplaudir <span> {likes}</span>
        </button>
      </div>
    </S.Container>
  )
}