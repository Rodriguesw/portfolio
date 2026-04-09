import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.color.gray.gray500};
`

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 72px;

    gap: 56px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Description = styled.div`
    width: 100%;
    height: auto;

    gap: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const ContainerProjects = styled.div`
    width: 100%;
    height: auto;
    max-width: 1040px;

    gap: 24px;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
`