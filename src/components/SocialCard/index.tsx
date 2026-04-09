
import { useState } from 'react'


import iconEmail from '../../assets/icon-mail.svg';
import iconGitHub from '../../assets/icon-github.svg';
import iconLinkedIn from '../../assets/icon-linkedin.svg';
import iconInstagram from '../../assets/icon-instagram.svg';
import iconEmailBlue from '../../assets/icon-mail-blue.svg';
import iconGitHubBlue from '../../assets/icon-github-blue.svg';
import iconLinkedInBlue from '../../assets/icon-linkedin-blue.svg';
import iconInstagramBlue from '../../assets/icon-instagram-blue.svg';
import iconArrowUpRight from '../../assets/icon-arrow-up-right.svg';

import * as S from './styles';
import { TextMd } from '../../styles/stylesTypography';

interface SocialCardProps {
  id?: 'linkedin' | 'instagram' | 'github' | 'email'
  title?: string
  titleColor?: string
  description?: string
  subDescription?: string
}

export default function SocialCard(props: SocialCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const id = props.id ?? 'linkedin'

  const iconById = {
    linkedin: { default: iconLinkedIn, hover: iconLinkedInBlue },
    instagram: { default: iconInstagram, hover: iconInstagramBlue },
    github: { default: iconGitHub, hover: iconGitHubBlue },
    email: { default: iconEmail, hover: iconEmailBlue },
  } as const

  const icon = isHovered ? iconById[id].hover : iconById[id].default

  return (
    <S.Container onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={icon} alt={id} />

      <TextMd>{props.title}</TextMd>

      <img src={iconArrowUpRight} alt={id} />
    </S.Container>
  )
}
