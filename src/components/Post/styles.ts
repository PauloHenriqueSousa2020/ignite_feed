import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray_800};
  padding: 2rem 2.5rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header {
     display: flex;
     align-items: center;
     gap: 1rem;

     strong {
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 0.25rem;
     }

     span {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.gray_400};
     }

     div {
      display: flex;
      flex-direction: column;
     }
    }

    label {
      color: ${({ theme }) => theme.colors.gray_400};
      font-size: 0.875rem;
    }
  }

  .content {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_600};
    padding: 1.5rem 0rem;
  }

  .commentForm {
    padding-top: 1.5rem;
    width: 100%;
    gap: 1rem;

    &:focus-within footer {
      visibility: visible;
      max-height: none;
    }

    strong {
      color: ${({ theme }) => theme.colors.gray_100};
      line-height: 1.6;
    }

    textarea {
      width: 100%;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.gray_900};
      border: 0;
      resize: none;
      height: 6rem;
      padding: 1rem;
      color: ${({ theme }) => theme.colors.gray_100};
      line-height: 1.4;
      margin-top: 1rem;
    }

    footer {
      visibility: hidden;
      max-height: 0;

     

      button {
        background: ${({ theme }) => theme.colors.green_500};
        color: ${({ theme }) => theme.colors.white};
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        cursor: pointer;
        font-weight: bold;
        border: 0;
        border-radius: 8px;
        transition: background 0.1s;
      }
  
      button:hover {
        background: ${({ theme }) => theme.colors.green_300};
      }
    }

  }
`