import * as S from "./styles";

export function Header() {
  return (
    <S.Header>
      <S.HeaderContent>
        <S.CardGithub>
          <S.Avatar src="" alt="" />
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
        </S.CardGithub>
      </S.HeaderContent>
    </S.Header>
  );
}
