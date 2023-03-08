import styled from "styled-components";

export const CardProfileGithub = styled.div`
  margin-top: -60px;
  background-color: ${(props) => props.theme["base-profile"]};
  width: 100%;
  border-radius: 12px;
  display: flex;
  padding: 35px 50px;
  gap: 30px;
  /* box-shadow: 0px 0px 30px 1px #000; */
`;

export const infoProfileGithub = styled.div`
  color: ${(props) => props.theme["base-title"]};
`;

export const Avatar = styled.img`
  border-radius: 10px;
  width: 148px;
`;
