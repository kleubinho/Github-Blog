import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-block: 8rem 3rem;
`;

export const Titles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const Search = styled.input`
  ${({ theme }) => css`
    background-color: ${theme["base-input"]};
    color: ${theme["base-label"]};
    border: 1px solid ${theme["base-border"]};
    &::placeholder {
        color: ${theme["base-label"]};
    }
  `}
  font-size: 16px;
  padding: 15px;
  border-radius: 6px;
`;
