import * as S from "./styles";
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <S.Header>
        <S.Logo src={logo} />
        {/* <S.CardGithub>
          <S.Avatar src="https://avatars.githubusercontent.com/u/79463086?v=4" alt="" />
          <div>
            <h2>Kleber Henrique</h2>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>

            <div>
              <div>
                <span>cameronwll</span>
              </div>
              <div>
                <span>Rocketseat</span>
              </div>
              <div>
                <span>32 seguidores</span>
              </div>
            </div>
          </div>
        </S.CardGithub> */}
    </S.Header>
  );
}
