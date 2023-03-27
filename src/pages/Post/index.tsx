import { CardPublication } from './components/CardPublication'
import * as S from './styles'

export function Post() {
    return (
        <S.Container>
            <S.Content>
                <CardPublication />
            </S.Content>
        </S.Container>
    )
}