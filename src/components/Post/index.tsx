// components
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

// styles
import * as S from './styles';

export function Post() {
  return (
    <S.Container>
      <div className='wrapper'>
        <div className='header'>
          <Avatar src="https://github.com/PauloHenriqueSousa2020.png" alt="" />
          <div>
            <strong>Paulo Henrique</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <label>Publicado há 1h</label>
      </div>
      <div className='content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod aperiam saepe sint eveniet quo consequatur nobis? Inventore ut, laboriosam explicabo dolor ipsa soluta sunt laborum sapiente voluptatum aut deserunt.
      </div>

      <form className='commentForm'>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Escreva um comentário...' />

        <footer>
          <button type='submit'>
            Publicar
          </button>
        </footer>
      </form>

      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </S.Container>
  )
}