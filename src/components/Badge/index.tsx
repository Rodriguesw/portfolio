
import { TextMd } from '../../styles/stylesTypography'
import { theme } from '../../styles/theme'
import * as S from './styles'

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
