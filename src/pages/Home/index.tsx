import { CardProfile } from "../../components/CardProfile";
import { SearchPub } from "./Components/SearchPub";
import * as S from "./styles";
export function Home() {
  return (
    <S.Container>
      <S.Content>
        <CardProfile />

        <SearchPub />
      </S.Content>
    </S.Container>
  );
}
