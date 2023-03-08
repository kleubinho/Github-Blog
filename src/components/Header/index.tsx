import * as S from "./styles";
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <S.Header>
        <S.Logo src={logo} />        
    </S.Header>
  );
}
