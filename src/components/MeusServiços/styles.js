import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    height: 480px;

    background-color: ${theme.color.gray.gray600};
`

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 120px 0;

    gap: 56px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const ContainerCard = styled.div`
    width: auto;
    height: auto;

    gap: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Card = styled.div`
    width: auto;
    height: auto;
    padding: 20px;

    gap: 20px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    border-radius: 12px;
    border: 2px solid ${theme.color.gray.gray500};
`