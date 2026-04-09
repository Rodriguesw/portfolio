import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    height: auto;
    max-width: 400px;
    padding: 24px 20px;

    gap: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    background-color: ${theme.color.gray.gray400};

    >img:first-child{
        width: 28px;
        height: auto;
    }

    >p{
        width: 100%;
        transition: color 0.2s ease;
    }

    >img:last-child{
        width: 20px;
        height: auto;
    }

    &:hover{
        cursor: pointer;
        >p{
            color: ${theme.color.blue};
        }
    }
`
