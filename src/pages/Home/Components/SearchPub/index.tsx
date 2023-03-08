import { PublicationCard } from '../PublicationCard';
import * as S from './styles'

export function SearchPub() {
  return (
    <S.Container>
      <S.Titles>
        <h3>Publicações</h3>

        <span>6 publicações</span>
      </S.Titles>
      <S.Search type="text" placeholder="Buscar conteúdo" />
    </S.Container>
  );
}
