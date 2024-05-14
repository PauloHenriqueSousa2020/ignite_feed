// libs
import { HTMLProps } from "react";

// styles
import * as S from "./styles";

interface AvatarType extends HTMLProps<HTMLImageElement>{
  hasBorder?: boolean;
}


export function Avatar ({ hasBorder = true, ...props }: AvatarType) {
  return (
    <>
      {hasBorder ? <S.AvatarWithBorder {...props} /> : <S.Avatar {...props} />}
    </>
  )
}