import { theme } from "./theme";
import styled from "styled-components";

export const TitleLg = styled.h1`
    font-size: ${ props => props.fontSize ? props.fontSize : theme.typography.fontSize.extraLarge};
    line-height: ${ props => props.lineHeight ? props.lineHeight : theme.typography.lineHeight.base};
    font-family: ${ props => props.fontFamily ? props.fontFamily : theme.typography.fontFamily.asap};
    font-weight:${ props => props.weight ? props.weight : theme.typography.fontWeight.bold};
    color: ${ props => props.color ? props.color : theme.color.gray.gray100};
`

export const TitleMd = styled.h2`
    font-size: ${ props => props.fontSize ? props.fontSize : theme.typography.fontSize.large};
    line-height: ${ props => props.lineHeight ? props.lineHeight : theme.typography.lineHeight.base};
    font-family: ${ props => props.fontFamily ? props.fontFamily : theme.typography.fontFamily.asap};
    font-weight:${ props => props.weight ? props.weight : theme.typography.fontWeight.bold};
    color: ${ props => props.color ? props.color : theme.color.gray.gray100};
`

export const TitleSm = styled.h3`
    font-size: ${ props => props.fontSize ? props.fontSize : theme.typography.fontSize.base};
    line-height: ${ props => props.lineHeight ? props.lineHeight : theme.typography.lineHeight.base};
    font-family: ${ props => props.fontFamily ? props.fontFamily : theme.typography.fontFamily.asap};
    font-weight:${ props => props.weight ? props.weight : theme.typography.fontWeight.bold};
    color: ${ props => props.color ? props.color : theme.color.gray.gray100};
`

// Paragraph
export const Subtitle = styled.p`
    font-size: ${ props => props.fontSize ? props.fontSize : theme.typography.fontSize.medium};
    line-height: ${ props => props.lineHeight ? props.lineHeight : theme.typography.lineHeight.base};
    font-family: ${ props => props.fontFamily ? props.fontFamily : theme.typography.fontFamily.inconsolata};
    font-weight:${ props => props.weight ? props.weight : theme.typography.fontWeight.regular};
    color: ${ props => props.color ? props.color : theme.color.gray.gray100};
`

export const TextMd = styled.p`
    font-size: ${ props => props.fontSize ? props.fontSize : theme.typography.fontSize.medium};
    line-height: ${ props => props.lineHeight ? props.lineHeight : theme.typography.lineHeight.medium};
    font-family: ${ props => props.fontFamily ? props.fontFamily : theme.typography.fontFamily.mavenPro};   
    font-weight:${ props => props.weight ? props.weight : theme.typography.fontWeight.regular};
    color: ${ props => props.color ? props.color : theme.color.gray.gray100};
`

export const TextSm = styled.p`
    font-size: ${ props => props.fontSize ? props.fontSize : theme.typography.fontSize.small};
    line-height:  ${ props => props.lineHeight ? props.lineHeight : theme.typography.lineHeight.medium};
    font-family: ${ props => props.fontFamily ? props.fontFamily : theme.typography.fontFamily.mavenPro};
    font-weight:${ props => props.weight ? props.weight : theme.typography.fontWeight.regular};
    color: ${ props => props.color ? props.color : theme.color.gray.gray100};
`