import styled from "styled-components";
import bg1 from "../../assets/bg1.png";
import {theme} from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    height: 750px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    background: url(${bg1}) no-repeat center center;
    background-size: cover;
`

export const About = styled.div`
    width: 100%;
    height: auto;

    gap: 56px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Photo = styled.div`
    position: relative;

    width: 96px;
    height: 96px;
    padding: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 2px solid ${theme.color.red};

    >img{
        width: 100%;
        height: auto;

        border-radius: 50%;
    }

    >img:nth-child(2){
        position: absolute;
        bottom: 0;
        right: 0;

        width: 32px;
        height: auto;
    }
`

export const Description = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    >p:nth-of-type(2){
        margin-top: 20px;
    }

    @media (max-width: 768px) {
        >p{
            font-size: 12px;
            text-align: center;
        }

        >h1{
            font-size: 24px;
            text-align: center;
        }

        >p:nth-of-type(2){
            font-size: 13px;
        }
    }
`