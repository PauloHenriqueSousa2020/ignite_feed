// styles
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import * as S from "./styles";

export function Comment() {
  return (
    <S.Container>
      <Avatar src="https://github.com/PauloHenriqueSousa2020.png" alt="" hasBorder={false} />

      <div className="section">
        <div className="content">
          <div className="wrapper">
            <div className="wrapperHeader">
              <strong>Paulo Henrique</strong>
              <span>Cerca de 2h</span>
            </div>
            <button className="trashButton" title="Deletar comentário">
              <Trash size={18} />
            </button>
          </div>

          <p className="comment">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, tenetur nulla dignissimos earum tempore eos ratione iste eius commodi cum rerum, impedit quasi quas odio cumque consequuntur exercitationem distinctio quia.
          </p>
        </div>
        <button className="thumbsButton" title="Aplaudir comentário">
          <ThumbsUp size={18} />
          Aplaudir <span> 20</span>
        </button>
      </div>


    </S.Container>
  )
}