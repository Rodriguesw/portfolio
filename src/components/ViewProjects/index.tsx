
import * as S from './styles'
import { theme } from '../../styles/theme'
import { TextSm } from '../../styles/stylesTypography'

interface ViewProjectsProps {
  image: string
  title: string
  description: string
}

export default function ViewProjects(props: ViewProjectsProps) {
  return (
    <S.Container>
      <img src={props.image} alt="" />

      <S.Description>
        <TextSm color={theme.color.gray.gray100}>
          {props.title}
        </TextSm>

        <TextSm color={theme.color.gray.gray100}>
          {props.description}
        </TextSm>
      </S.Description>
    </S.Container>
  )
}
