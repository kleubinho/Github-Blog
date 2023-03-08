import styled from "styled-components";
import cover from "../../assets/Cover.png";

export const Header = styled.header`
  background-image: url(${cover});
  background-size: cover;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 100px;
`;

export const Logo = styled.img`
    margin-top: -40px;
`



