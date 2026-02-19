import React from "react";
import styled from "styled-components";
import arrow from '../assets/arrow.svg';

const ScrollUpContainer = styled.div`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    /* 컨테이너의 커서는 기본값으로 유지 */
`;

const ArrowImage = styled.img`
    width: ${props => props.theme.vw(180)};
    height: ${props => props.theme.vh(180)};
    object-fit: contain; 
    
    cursor: pointer; 
    
    &:hover {
        opacity: 0.8;
    }
`;

export default function ScrollUp({ onScroll }) {
    return (
        <ScrollUpContainer>
            {/* 클릭 이벤트를 컨테이너가 아닌 이미지에 직접 바인딩합니다 */}
            <ArrowImage 
                src={arrow} 
                alt="Scroll Up Arrow" 
                onClick={onScroll} 
            />
        </ScrollUpContainer>
    );
}