import { CardProfile } from "../../components/CardProfile";
import { PublicationCard } from "./Components/PublicationCard";
import { SearchPub } from "./Components/SearchPub";
import * as S from "./styles";
export function Home() {
  return (
    <S.Container>
      <S.Content>
        <CardProfile />

        <SearchPub />

        <S.PubCards>
          <PublicationCard />
          <PublicationCard />
        </S.PubCards>
      </S.Content>
    </S.Container>
  );
}
