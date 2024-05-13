// styles and assets
import { PencilLine } from "phosphor-react"
import * as S from "./styles";

export function Sidebar() {
  return (
    <S.Sidebar>
      <img className="coverImg" src="https://images.unsplash.com/photo-1511376777868-611b54f68947?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className="profile">
        <img className="avatar" src="https://github.com/PauloHenriqueSousa2020.png" alt="" />
        <strong>Paulo Henrique</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine  size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </S.Sidebar>
  )
}