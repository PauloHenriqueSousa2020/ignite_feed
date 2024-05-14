import styled from "styled-components";

export const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.gray_800};
  border-radius: 8px;
  overflow: hidden;

  .coverImg {
    height: 72px;
    width: 100%;
    object-fit: cover;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(0px - 1.5rem - 6px);
    
    strong {
      margin-top: 1rem;
      color: ${({ theme }) => theme.colors.gray_100};
    }

    span {
      color: ${({ theme }) => theme.colors.gray_400};
      font-size: 0.875rem;
      line-height: 1.6;
    }
  }

  footer {
    border-top: 1px solid ${({ theme }) => theme.colors.gray_600};
    padding: 1.5rem 2rem 2rem;
    margin-top: 1.5rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors.green_300};
      font-weight: bold;
      border: 1px solid ${({ theme }) => theme.colors.green_300};
      padding: 1rem 1.5rem;
      text-decoration: none;
      border-radius: 8px;
      transition: color 0.1s, background 0.1s;
     
    }

    a:hover {
        background: ${({ theme }) => theme.colors.green_500};
        color: ${({ theme }) => theme.colors.white};
      }
  }
`