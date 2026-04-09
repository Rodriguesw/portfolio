import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    height: auto;

    background-color: ${theme.color.gray.gray600};
`

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 32px 12px;

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
    width: 280px;
    height: auto;
    padding: 20px;

    gap: 20px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    border-radius: 12px;
    border: 2px solid ${theme.color.gray.gray500};

    @media (max-width: 479px) {
        width: 100%;
    }
`

export const CardText = styled.div`
    width: auto;
    height: auto;

    gap: 8px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
`