import styled from "styled-components";
import cover from "../../assets/Cover.png";

export const Header = styled.header`
  background-image: url(${cover});
  background-size: cover;
  height: 256px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const CardGithub = styled.div`
  background-color: ${(props) => props.theme["base-profile"]};
  width: 100%;
  position: relative;
  top: 120px;
`;

export const Avatar = styled.img`
  border-radius: 10px;
  width: 148px;
`;

