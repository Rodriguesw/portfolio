import SocialCard from '../SocialCard'
import TitleAndDescription from '../TitleAndDescription'

import * as S from './styles'
import { theme } from '../../styles/theme'

export default function Contato() {
  return (
    <S.Container>
     <S.Wrapper id="contact">
        <TitleAndDescription 
          titleColor={theme.color.purple}
          title="Contato" 
          description="Gostou do meu trabalho?"
          subDescription="Entre em contato ou acompanhe as minhas redes sociais!"
        />

        <S.ContainerSocialCard>
          <SocialCard id="linkedin" title="Linkedin" />

          <SocialCard id="instagram" title="Instagram" />

          <SocialCard id="github" title="GitHub" />

          <SocialCard id="email" title="Email" />
        </S.ContainerSocialCard>
      </S.Wrapper>       
    </S.Container>
  )
}
