
import * as S from './styles'
import photo from "../../assets/photo.jpg";
import iconCode from "../../assets/icon-code.svg";

import github from '../../assets/outhers/github.svg'
import html from '../../assets/outhers/html.svg'
import css from '../../assets/outhers/css.svg'
import js from '../../assets/outhers/javascript.svg'
import react from '../../assets/outhers/react.svg'
import node from '../../assets/outhers/node.svg'
import iconDown from '../../assets/icon-down.svg'

import { theme } from "../../styles/theme";
import {Subtitle, TextSm, TitleLg} from '../../styles/stylesTypography'
import Badge from '../Badge';

export default function SobreMim() {
  const handleScrollToProjects = () => {
    const target = document.getElementById('projects')
    if (!target) return

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', '#projects')
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Photo>
          <img src={photo} alt="Photo" />

          <img src={iconCode} alt="Icon Code" />
        </S.Photo>

        <S.Description>
          <Subtitle color={theme.color.gray.gray200}>
           Hello World! Meu nome é <span style={{color: theme.color.red}}>Matheus Henrique</span> e sou 
          </Subtitle>

          <TitleLg color={theme.color.gray.gray200}>
            Desenvolvedor Fullstack
          </TitleLg>

          <TextSm color={theme.color.gray.gray300}>
            Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da <br/>minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
          </TextSm>
        </S.Description>

        <S.ContainerBadge>
          <Badge image={github} text="Github" />
          <Badge image={html} text="HTML" />
          <Badge image={css} text="CSS" />
          <Badge image={js} text="JavaScript" />
          <Badge image={react} text="React" />
          <Badge image={node} text="Node.js" />
        </S.ContainerBadge>

        <S.ButtonDown onClick={handleScrollToProjects}>
          <img src={iconDown} alt="Icon Down" />
        </S.ButtonDown>
      </S.Wrapper>
    </S.Container>
  )
}
