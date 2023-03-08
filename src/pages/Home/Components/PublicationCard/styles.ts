import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  cursor: pointer;

  padding: 30px;

  p {
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 4; // Quantidade de linhas
    -webkit-box-orient: vertical;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  h2 {
    white-space: pre-wrap;
    max-width: 400px;
    color:${props => props.theme['base-title']};
  }

  small {
    color:${props => props.theme['base-span']};
  }
`;
