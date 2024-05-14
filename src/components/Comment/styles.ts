import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;

  .section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .content {
      display: flex;
      flex-direction: column;
      background: ${({ theme }) => theme.colors.gray_700};
      width: 100%;
      border-radius: 8px;
      padding: 1rem 2rem 1rem;
      gap: 1rem;
  
      .wrapper {
        display: flex;
        align-items: flex-start;
    
        .wrapperHeader {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
    
          strong {
            font-size: 0.875rem;
            color: ${({ theme }) => theme.colors.gray_100};
          }
    
          span {
            font-size: 0.75rem;
            color: ${({ theme }) => theme.colors.gray_400};
          }
        }

        .trashButton {
          background: transparent;
          border: none;
          color: ${({ theme }) => theme.colors.gray_400};
          cursor: pointer;
          transition: color 0.1s;
          margin-bottom: 0px;

          :hover {
            color: ${({ theme }) => theme.colors.green_300};
          }
        }
      }
  
      .comment {
        color: ${({ theme }) => theme.colors.gray_100};
        font-size: 0.875rem;
      }
    }

    .thumbsButton {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.gray_400};
      cursor: pointer;
      width: fit-content;

      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.875rem;
      border-radius: 8px;
      padding: 0 0.25rem;

      font-weight: bold;
      transition: color 0.1s;

      span::before {
        content: "•";
      }
    }
    
    .thumbsButton:hover {
      color: ${({ theme }) => theme.colors.green_300};
    }

  }
`