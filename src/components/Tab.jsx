import React, { useState } from "react";
import styled from "styled-components";
import camImg from "../assets/cam_all.svg";
import lensImg from "../assets/lens_all.svg";
import lightImg from "../assets/light_all.svg";
import etcImg from "../assets/etc_all.svg";

// --- 스타일 컴포넌트 ---

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 ${props => props.theme.vw(80)};
  margin-bottom: ${props => props.theme.vh(60)}; // 탭과 이미지 사이 60px 여백
`;

const TabButton = styled.button`
  font-family: 'Pretendard-Regular';
  font-size: ${props => props.theme.vw(18)};
  color: #969696;
  border: 1px #FFD4E7 solid;
  border-radius: 50px;
  width: ${props => props.theme.vw(148)};
  height: ${props => props.theme.vh(48)};
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &.active {
    color: #3C3C3C;
    background: #FFD4E7;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
  img {
    width: ${props => props.theme.vw(1180)}; // 디자인에 맞춰 조절하세요
    height: auto;
    object-fit: contain;
  }
`;

// --- 메인 컴포넌트 ---

export default function EquipmentSection() {
    const [activeTab, setActiveTab] = useState(0);

    const categories = ["카메라", "렌즈", "조명", "기타 장비"];

    // 각 탭 인덱스에 매칭되는 이미지 경로들
    const tabImages = [
        camImg,
        lensImg,
        lightImg,
        etcImg
    ];

    return (
        <div>
            {/* 탭 버튼 영역 */}
            <TabContainer>
                {categories.map((tab, idx) => (
                    <TabButton
                        key={idx}
                        className={activeTab === idx ? "active" : ""}
                        onClick={() => setActiveTab(idx)}
                    >
                        {tab}
                    </TabButton>
                ))}
            </TabContainer>

            {/* 현재 선택된 탭(activeTab)에 해당하는 이미지를 보여줌 */}
            <ImageWrapper>
                <img
                    src={tabImages[activeTab]}
                    alt={categories[activeTab]}
                />
            </ImageWrapper>
        </div>
    );
}