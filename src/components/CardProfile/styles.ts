import styled from "styled-components";

export const CardProfileContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardProfileGithub = styled.div`
  background-color: ${(props) => props.theme["base-profile"]};
  width: 100%;
  /* position: relative; */
  top: 150px;
  border-radius: 12px;
  display: flex;
  padding: 35px 50px;
  gap: 30px;
`;

export const Avatar = styled.img`
  border-radius: 10px;
  width: 148px;
`;