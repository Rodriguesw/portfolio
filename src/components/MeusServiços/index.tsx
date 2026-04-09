
import TitleAndDescription from '../TitleAndDescription'

import IconDesk from '../../assets/icon-desk.svg'
import iconDrives from '../../assets/icon-drives.svg'
import iconInfinity from '../../assets/icon-infinity.svg'

import * as S from './styles'
import { theme } from '../../styles/theme'
import { TextSm, TitleSm } from '../../styles/stylesTypography'

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
            
            <S.CardText>
              <TitleSm>Websites e Aplicativos</TitleSm>
              
              <TextSm color={theme.color.gray.gray300}>Desenvolvimento de interfaces</TextSm>
            </S.CardText>
          </S.Card>

          <S.Card>
            <img src={iconDrives} alt="icon-drives" />

            <S.CardText>
              <TitleSm>API e banco de dados</TitleSm>
              
              <TextSm color={theme.color.gray.gray300}>Criação de serviços do sistema</TextSm>
            </S.CardText>
          </S.Card>

          <S.Card>
            <img src={iconInfinity} alt="icon-infinity" />

            <S.CardText>
              <TitleSm>DevOps</TitleSm>
              
              <TextSm color={theme.color.gray.gray300}>Gestão e infraestrutura da aplicação</TextSm>
            </S.CardText>
          </S.Card>
        </S.ContainerCard>
      </S.Wrapper>
    </S.Container>
  )
}
