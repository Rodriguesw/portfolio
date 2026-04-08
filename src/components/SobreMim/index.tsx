
import * as S from './styles'
import photo from "../../assets/photo.jpg";
import iconCode from "../../assets/icon-code.svg";

import { theme } from "../../styles/theme";
import {Subtitle, TextSm, TitleLg} from '../../styles/stylesTypography'

export default function SobreMim() {

  return (
    <S.Container>
      <S.About>
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
      </S.About>
    </S.Container>
  )
}
