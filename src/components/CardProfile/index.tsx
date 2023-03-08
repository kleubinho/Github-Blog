import * as S from "./styles";

export function CardProfile() {
    return (
        <S.CardProfileGithub>
          <S.Avatar src="https://avatars.githubusercontent.com/u/79463086?v=4" alt="" />
          <S.infoProfileGithub>
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
          </S.infoProfileGithub>
        </S.CardProfileGithub>
    )
}