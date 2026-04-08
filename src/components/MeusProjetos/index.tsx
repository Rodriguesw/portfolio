
import { Subtitle, TitleMd } from '../../styles/stylesTypography'
import { theme } from '../../styles/theme'
import * as S from './styles'

export default function MeusProjetos() {

  return (
    <S.Container>
      <S.Wrapper>
        <S.Description>
          <Subtitle color={theme.color.gray.gray200}>
           <span style={{color: theme.color.red}}>Meu trabalho</span>
          </Subtitle>

          <TitleMd color={theme.color.gray.gray100}>
            Veja os projetos em destaque
          </TitleMd>
        </S.Description>
      </S.Wrapper>
    </S.Container>
  )
}
