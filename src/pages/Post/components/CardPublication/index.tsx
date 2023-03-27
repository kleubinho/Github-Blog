import * as S from "./styles";
import * as Ai from "react-icons/ai";
import { BsArrowBarLeft, BsCalendar, BsCalendar2, BsCalendar2Week, BsChevronCompactLeft, BsChevronLeft, BsFillBuildingFill } from "react-icons/bs";
import { HiUsers, HiArrowTopRightOnSquare } from "react-icons/hi2";
import { useTheme } from "styled-components";

export function CardPublication() {
  const theme = useTheme();
  return (
    <S.CardProfileGithub>
      <S.infoProfileGithub>
        <S.NameProfile>
          <S.LinkGithub href="/">
            <BsChevronLeft /> Voltar
          </S.LinkGithub>

          <S.LinkGithub href="#">
            GITHUB<HiArrowTopRightOnSquare size={20} />
          </S.LinkGithub>
        </S.NameProfile>
        <h2>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </h2>

        <S.Icons>
          <S.Icon>
            <Ai.AiFillGithub color={theme["base-label"]} />
            <span>cameronwll</span>
          </S.Icon>
          <S.Icon>
            <BsCalendar2Week color={theme["base-label"]} />
            <span>Há 1 dia</span>
          </S.Icon>
          <S.Icon>
            <Ai.AiTwotoneMessage color={theme["base-label"]} />
            <span>32 Comentários</span>
          </S.Icon>
        </S.Icons>
      </S.infoProfileGithub>
    </S.CardProfileGithub>
  );
}
