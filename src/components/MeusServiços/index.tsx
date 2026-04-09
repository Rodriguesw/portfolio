
import { theme } from '../../styles/theme'
import TitleAndDescription from '../TitleAndDescription'

import iconInfinity from '../../assets/icon-infinity.svg'
import IconDesk from '../../assets/icon-desk.svg'
import iconDrives from '../../assets/icon-drives.svg'

import * as S from './styles'
import { TitleSm } from '../../styles/stylesTypography'

export default function MeusServiços() {

  return (
    <S.Container>
      <S.Wrapper id="services">
        <TitleAndDescription 
          title="Meus serviços" 
          description="Como posso ajudar o seu negócio" 
        />

        <S.ContainerCard>
          <S.Card>
            <img src={IconDesk} alt="icon-desk" />
            <TitleSm>Websites e Aplicativos</TitleSm>
            <TitleSm weight={theme.typography.fontWeight.regular}>Desenvolvimento de interfaces</TitleSm>
          </S.Card>

          <S.Card>
            <img src={iconDrives} alt="icon-drives" />
            <TitleSm>API e banco de dados</TitleSm>
            <TitleSm weight={theme.typography.fontWeight.regular}>Criação de serviços do sistema</TitleSm>
          </S.Card>

          <S.Card>
            <img src={iconInfinity} alt="icon-infinity" />
            <TitleSm>DevOps</TitleSm>
            <TitleSm weight={theme.typography.fontWeight.regular}>Gestão e infraestrutura da aplicação</TitleSm>
          </S.Card>
        </S.ContainerCard>
      </S.Wrapper>
    </S.Container>
  )
}
