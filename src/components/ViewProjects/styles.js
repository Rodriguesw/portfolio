import styled from "styled-components";
import bg2 from "../../assets/bg-2.png";
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
`

export const Description = styled.div`
    width: 100%;
    height: auto;

    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
