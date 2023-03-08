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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme["base-title"]};

  p {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const NameProfile = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const LinkGithub = styled.a`
  display: flex;
  color: ${(props) => props.theme["blue"]};
  gap: 5px;
  font-weight: bold;
  text-decoration: none;
`;

export const Avatar = styled.img`
  border-radius: 10px;
  width: 148px;
`;
