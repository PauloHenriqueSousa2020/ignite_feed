import { HTMLProps } from "react";

interface AvatarType extends HTMLProps<HTMLImageElement>{
  hasBorder?: boolean;
}

import * as S from "./styles";

export function Avatar ({ hasBorder = true, ...props }: AvatarType) {
  return (
    <>
      {hasBorder ? <S.AvatarWithBorder {...props} /> : <S.Avatar {...props} />}
    </>
  )
}