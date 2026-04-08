import { theme } from "./theme";
import styled from "styled-components";

export const TitleLg = styled.h1`
    font-size: ${theme.typography.fontSize.extraLarge};
    line-height: ${theme.typography.lineHeight.base};
    font-family: ${theme.typography.fontFamily.asap};
    font-weight:${theme.typography.fontWeight.bold};
    color: ${ props => props.color || theme.colors.gray.gray900};
`

export const TitleMd = styled.h2`
    font-size: ${theme.typography.fontSize.large};
    line-height: ${theme.typography.lineHeight.base};
    font-family: ${theme.typography.fontFamily.asap};
    font-weight:${theme.typography.fontWeight.bold};
    color: ${ props => props.color || theme.colors.gray.gray900};
`

export const TitleSm = styled.h3`
    font-size: ${theme.typography.fontSize.base};
    line-height: ${theme.typography.lineHeight.base};
    font-family: ${theme.typography.fontFamily.asap};
    font-weight:${theme.typography.fontWeight.bold};
    color: ${ props => props.color || theme.colors.gray.gray900};
`

// Paragraph
export const Subtitle = styled.p`
    font-size: ${theme.typography.fontSize.medium};
    line-height: ${theme.typography.lineHeight.base};
    font-family: ${theme.typography.fontFamily.inconsolata};
    font-weight:${theme.typography.fontWeight.regular};
    color: ${ props => props.color || theme.colors.gray.gray900};
`

export const TextMd = styled.p`
    font-size: ${theme.typography.fontSize.medium};
    line-height: ${theme.typography.lineHeight.medium};
    font-family: ${theme.typography.fontFamily.mavenPro};
    font-weight:${theme.typography.fontWeight.regular};
    color: ${ props => props.color || theme.colors.gray.gray900};
`

export const TextSm = styled.p`
    font-size: ${theme.typography.fontSize.small};
    line-height: ${theme.typography.lineHeight.medium};
    font-family: ${theme.typography.fontFamily.mavenPro};
    font-weight:${theme.typography.fontWeight.regular};
    color: ${ props => props.color || theme.colors.gray.gray900};
`