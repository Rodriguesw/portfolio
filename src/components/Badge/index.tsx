
import * as S from './styles'
import { theme } from '../../styles/theme'
import { TextMd } from '../../styles/stylesTypography'

type BadgeProps = {
  image: string
  text: string
}

export default function Badge({ image, text }: BadgeProps) {
  return (
    <S.Container>
      <img src={image} alt={text} />

      <TextMd color={theme.color.gray.gray200}>{text}</TextMd>
    </S.Container>
  )
}
