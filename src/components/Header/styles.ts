import styled from "styled-components";

export const Header = styled.header`
    background-color: ${({ theme }) => theme.colors.gray_800};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  margin-bottom: 2rem;


  img {
    width: 3rem;
    height: 3rem;
  }

  p {
    color: var(--gray-100);
    font-size: 1.5rem;
    font-weight: bold;
  }
`