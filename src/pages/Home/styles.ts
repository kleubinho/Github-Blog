import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1100px;
  width: 100%;
`;

export const PubCards = styled.section`
  margin-block: 60px 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
`;
