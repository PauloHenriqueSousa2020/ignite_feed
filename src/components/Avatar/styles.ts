import styled from "styled-components";

export const AvatarWithBorder  = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  border:  4px solid ${({ theme }) => theme.colors.gray_800};
  outline: 2px solid ${({ theme }) => theme.colors.green_300};
  box-sizing: initial;
`

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
`