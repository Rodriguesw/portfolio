import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    width: auto;
    height: auto;
    padding: 9px 16px;

    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10rem;
    background-color: ${theme.color.gray.gray400};

    >img{
        fill: red;
    }
`
