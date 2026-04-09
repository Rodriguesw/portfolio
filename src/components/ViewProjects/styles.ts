import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    height: auto;
    max-width: 330px;
    padding: 12px;

    gap: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    border-radius: 12px;
    background-color: ${theme.color.gray.gray400};

    >img{
       width: 100%;
       height: auto;

       border-radius: 8px;
    }

    @media (max-width: 479px) {
        max-width: 100%;
    }
`

export const Description = styled.div`
    width: 100%;
    height: auto;

    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    >p:first-child{
        font-size: 16px;
        font-weight: 600;
    }
`
