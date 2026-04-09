import bg2 from "../../assets/bg-2.png";

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;

    background: url(${bg2}) no-repeat center center;
    background-size: cover;
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

export const ContainerSocialCard = styled.div`
    width: 100%;
    height: auto;

    gap: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`