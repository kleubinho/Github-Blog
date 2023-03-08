import * as S from "./styles";
import * as Ai from "react-icons/ai";
import { BsFillBuildingFill } from "react-icons/bs";
import { HiUsers, HiArrowTopRightOnSquare } from "react-icons/hi2";
import { useTheme } from "styled-components";

export function CardProfile() {
  const theme = useTheme();
  return (
    <S.CardProfileGithub>
      <S.Avatar
        src="https://avatars.githubusercontent.com/u/79463086?v=4"
        alt=""
      />
      <S.infoProfileGithub>
        <S.NameProfile>
          <h2>Kleber Henrique</h2>

          <S.LinkGithub href="#">
            GITHUB<HiArrowTopRightOnSquare size={20} />
          </S.LinkGithub>
        </S.NameProfile>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <S.Icons>
          <S.Icon>
            <Ai.AiFillGithub color={theme["base-label"]} />
            <span>cameronwll</span>
          </S.Icon>
          <S.Icon>
            <BsFillBuildingFill color={theme["base-label"]} />
            <span>Rocketseat</span>
          </S.Icon>
          <S.Icon>
            <HiUsers color={theme["base-label"]} />
            <span>32 seguidores</span>
          </S.Icon>
        </S.Icons>
      </S.infoProfileGithub>
    </S.CardProfileGithub>
  );
}
