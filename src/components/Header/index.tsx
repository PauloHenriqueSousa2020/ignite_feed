// styles and assets
import IgniteIcon from "../../assets/ignite.svg";
import * as S from "./styles";

export function Header () {
  return (
    <S.Header>
      <img src={IgniteIcon} alt="Ícone da aplicação" />
      <p>Ignite Feed</p>
    </S.Header>
  )
}