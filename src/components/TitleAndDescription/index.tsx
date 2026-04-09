
import * as S from './styles'
import { theme } from '../../styles/theme'
import { Subtitle, TextSm, TitleMd } from '../../styles/stylesTypography'

interface TitleAndDescriptionProps {
  title: string
  titleColor?: string
  description?: string
  subDescription?: string
}

export default function TitleAndDescription(props: TitleAndDescriptionProps) {
  return (
    <S.Container>
      <Subtitle color={theme.color.gray.gray200}>
        <span style={{color: props.titleColor || theme.color.red}}>{props.title}</span>
      </Subtitle>

      <TitleMd color={theme.color.gray.gray100}>
        {props.description}
      </TitleMd>

       <TextSm color={theme.color.gray.gray300}>
        {props.subDescription}
      </TextSm>
    </S.Container>
  )
}
