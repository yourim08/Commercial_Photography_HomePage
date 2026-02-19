import { useState, useEffect } from "react";
import styled from "styled-components";
import logo from '../assets/flower.svg'
import Tab from "../components/Tab";
import theme from "../styles/theme";

const EquipContainer = styled.div`
    -webkit-user-select: none;
    webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
    user-drag: none; 
    const EquipContainer = styled.div
    position: relative;
    height: ${props => props.theme.vh(1900)};
`

const Logo = styled.img`
    width: ${props => props.theme.vw(140)};
    height: ${props => props.theme.vh(140)};
    margin: auto;
`

const Head = styled.p`
    padding-top: 40px;
    font-family: 'Pretendard-SemiBold';
    font-size: ${props => props.theme.vw(40)};
    color: #1E1E1E;
`

const Text = styled.p`
    padding-top: 20px;
    font-family: 'Pretendard-Regular';
    font-size: ${props => props.theme.vw(24)};
    color: #3C3C3C;
`

const Info = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, ${props => props.theme.vh(100)});
    text-align: center;
    justify-content: center;
`

const Nav = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, ${props => props.theme.vh(522)});
    display: flex;
    gap: 0 80px;
    
`

export default function Equipment() {
    return (
        <EquipContainer>
            <Info>
                <Logo src={logo} alt='logo' />
                <Head>촬영 장비 소개</Head>
                <Text>커머셜 포토그래피의 전문 촬영 장비를 소개합니다!</Text>
            </Info>
            <Nav>
                <Tab />
            </Nav>
        </EquipContainer>
    )
}
