
import { Subtitle, TitleMd } from '../../styles/stylesTypography'
import { theme } from '../../styles/theme'
import * as S from './styles'

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

       <TitleMd color={theme.color.gray.gray100} fontSize={theme.typography.fontSize.small}>
        {props.subDescription}
      </TitleMd>
    </S.Container>
  )
}
