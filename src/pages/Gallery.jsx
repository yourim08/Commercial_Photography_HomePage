import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import logo from '../assets/circle.svg';

// 이미지 import (동일 경로 유지)
import list_1 from '../assets/GalleryList/list_1.svg';
import list_1_1 from '../assets/GalleryList/item/list_1_1.svg';
import list_1_2 from '../assets/GalleryList/item/list_1_2.svg';
import list_1_3 from '../assets/GalleryList/item/list_1_3.svg';
import list_2 from '../assets/GalleryList/list_2.svg';
import list_2_1 from '../assets/GalleryList/item/list_2_1.svg'; 
import list_2_2 from '../assets/GalleryList/item/list_2_2.svg'; 
import list_3 from '../assets/GalleryList/list_3.svg';
import list_3_1 from '../assets/GalleryList/item/list_3_1.svg'; 
import list_3_2 from '../assets/GalleryList/item/list_3_2.svg'; 
import list_3_3 from '../assets/GalleryList/item/list_3_3.svg'; 
import list_3_4 from '../assets/GalleryList/item/list_3_4.svg'; 
import list_3_5 from '../assets/GalleryList/item/list_3_5.svg'; 
import list_4 from '../assets/GalleryList/list_4.svg';
import list_4_1 from '../assets/GalleryList/item/list_4_1.svg'; 
import list_4_2 from '../assets/GalleryList/item/list_4_2.svg'; 
import list_4_3 from '../assets/GalleryList/item/list_4_3.svg'; 
import list_4_4 from '../assets/GalleryList/item/list_4_4.svg'; 
import list_5 from '../assets/GalleryList/list_5.svg';
import list_5_1 from '../assets/GalleryList/item/list_5_1.svg'; 
import list_5_2 from '../assets/GalleryList/item/list_5_2.svg'; 
import list_5_3 from '../assets/GalleryList/item/list_5_3.svg'; 
import list_5_4 from '../assets/GalleryList/item/list_5_4.svg'; 

const GalleryContainer = styled.div`
  -webkit-user-select: none; webkit-user-drag: none;
  -moz-user-select: none; -ms-user-select: none;
  user-select: none; user-drag: none;
  position: relative; 
  height: ${props => props.theme.vh(1500)};
`;

const Info = styled.div`
  position: absolute; left: 50%;
  transform: translate(-50%, ${props => props.theme.vh(100)});
  text-align: center; display: flex; flex-direction: column; align-items: center; width: 100%;
`;

const Logo = styled.img` 
  width: ${props => props.theme.vw(140)}; 
  height: ${props => props.theme.vh(140)}; 
  margin: auto;
`;

const Head = styled.p` 
  padding-top: ${props => props.theme.vh(20)}; 
  font-family: 'Pretendard-SemiBold'; 
  font-size: ${props => props.theme.vw(40)}; 
  color: #1E1E1E; 
`;

const Text = styled.p` 
  padding-top: ${props => props.theme.vh(20)}; 
  font-family: 'Pretendard-Regular'; 
  font-size: ${props => props.theme.vw(24)}; 
  color: #3C3C3C; 
`;

const ContentWrapper = styled.div`
  display: flex; justify-content: center; align-items: flex-start;
  margin-top: ${props => props.theme.vh(143)}; 
  width: 100%;
`;

const ImagePreview = styled.div`
  width: ${props => props.theme.vw(580)}; 
  min-height: ${props => props.theme.vh(700)}; 
  position: relative; flex-shrink: 0;
  
  .image-wrapper {
    position: relative; width: 100%;
  }

  img {
    width: 100%; height: auto; display: block; 
    border-radius: ${props => props.theme.vw(15)};
    position: absolute; top: 0; left: 0;
    opacity: 0;
    transition: opacity 1s ease-in-out, visibility 1s;
    z-index: 0;
    
    &.active {
      position: relative; opacity: 1; z-index: 1;
    }
  }
`;

const IndicatorContainer = styled.div`
  position: absolute; 
  bottom: ${props => props.theme.vh(20)}; 
  left: 50%; transform: translateX(-50%);
  display: flex; 
  gap: ${props => props.theme.vw(8)}; 
  z-index: 10;
`;

const Dot = styled.div`
  width: ${props => props.theme.vw(8)}; 
  height: ${props => props.theme.vw(8)}; 
  border-radius: 50%;
  background-color: ${props => (props.active ? "#FFFFFF" : "rgba(255, 255, 255, 0.4)")};
  border: ${props => props.theme.vw(1)} solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const ListSection = styled.div` 
  margin-left: ${props => props.theme.vw(24)}; 
  display: flex; 
  flex-direction: column; 
  align-items: flex-end; 
`;

const PinkLine = styled.div` 
  width: ${props => props.theme.vw(520)}; 
  height: ${props => props.theme.vh(2)}; 
  background-color: #FFD4E7; flex-shrink: 0; 
`;

const ListContainer = styled.div`
  width: ${props => props.theme.vw(480)}; 
  height: ${props => props.theme.vh(774)}; 
  overflow-y: scroll; position: relative;
  &::-webkit-scrollbar { display: none; } -ms-overflow-style: none; scrollbar-width: none;
  &::before { 
    content: ''; position: absolute; 
    left: ${props => props.theme.vw(20)}; 
    top: 0; 
    height: ${props => props.theme.vh(1470)}; 
    width: ${props => props.theme.vw(1)}; 
    background-color: #E0E0E0; z-index: 0; 
  }
`;

const ListInner = styled.div` 
  width: 100%; 
  height: ${props => props.theme.vh(1470)}; 
  padding-bottom: ${props => props.theme.vh(406)}; 
  box-sizing: content-box; 
`;

const ListItem = styled.div`
  display: flex; justify-content: space-between; align-items: center; 
  width: ${props => props.theme.vw(460)}; 
  height: ${props => props.theme.vh(272)}; 
  margin-left: ${props => props.theme.vw(20)}; 
  position: relative; transition: all 0.3s ease;
  background-color: ${props => (props.active ? "#FFEBF44D" : "transparent")};


  &::after {
    content: ''; position: absolute; 
    left: ${props => props.theme.vw(-4)}; 
    top: ${props => props.theme.vh(43)}; 
    width: ${props => props.theme.vw(10)}; 
    height: ${props => props.theme.vw(10)};
    background-color: ${props => (props.active ? "#FFD4E7" : "#b2b2b2ff")};
    border-radius: 50%; z-index: 1; transition: background-color 0.3s ease;
  }
`;

const ItemInfo = styled.div`
  text-align: left; height: 100%; display: flex; flex-direction: column;
  .date { 
    font-size: ${props => props.theme.vw(18)}; 
    font-family: 'Pretendard-Regular'; 
    color: ${props => (props.active ? "#1E1E1E" : "#b2b2b2ff")}; 
    padding-top: ${props => props.theme.vh(36)}; 
    padding-left: ${props => props.theme.vw(19)}; 
    transition: color 0.3s ease; 
  }
  .title { 
    font-size: ${props => props.theme.vw(24)}; 
    font-family: 'Pretendard-Medium'; 
    color: ${props => (props.active ? "#1E1E1E" : "#b2b2b2ff")}; 
    padding-top: ${props => props.theme.vh(8)}; 
    padding-left: ${props => props.theme.vw(19)}; 
    transition: color 0.3s ease; white-space: pre-wrap; 
  }
`;

const Thumbnail = styled.img` 
  width: ${props => props.theme.vw(200)}; 
  height: ${props => props.theme.vh(200)}; 
  border-radius: ${props => props.theme.vw(15)}; 
  object-fit: cover; 
  margin-right: ${props => props.theme.vw(20)}; 
`;

// ... 상단 import 및 스타일 컴포넌트 생략 (기존과 동일)

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSubIndex, setCurrentSubIndex] = useState(0); 
  const scrollRef = useRef(null);
  // 아이템의 실제 높이를 측정하기 위한 Ref 추가
  const itemRef = useRef(null); 

  const galleryData = [
    { id: 1, date: "240327", title: "노출 3요소 비교", thumbnail: list_1, imgs: [list_1_1, list_1_2, list_1_3] },
    { id: 2, date: "240610", title: "셔터스피드 실습", thumbnail: list_2, imgs: [list_2_1, list_2_2] },
    { id: 3, date: "241030", title: "노들섬 출사", thumbnail: list_3, imgs: [list_3_1, list_3_2, list_3_3, list_3_4, list_3_5] },
    { id: 4, date: "250507", title: "컬러 컨셉 촬영", thumbnail: list_4, imgs: [list_4_1, list_4_2, list_4_3, list_4_4] },
    { id: 5, date: "251212", title: "카메라 특강 및\n영상 실습", thumbnail: list_5, imgs: [list_5_1, list_5_2, list_5_3, list_5_4] },
  ];

  useEffect(() => {
    setCurrentSubIndex(0);
    const interval = setInterval(() => {
      setCurrentSubIndex((prev) => (prev + 1) % galleryData[activeIndex].imgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, galleryData[activeIndex].imgs.length]);

  const handleScroll = () => {
    if (scrollRef.current && itemRef.current) {
      // 272 같은 고정값 대신, 현재 화면에서 실제 렌더링된 아이템의 높이를 가져옵니다.
      const itemHeight = itemRef.current.offsetHeight;
      const scrollTop = scrollRef.current.scrollTop;
      
      // 맥북 배율 오차를 방지하기 위해 계산
      const index = Math.min(
        Math.max(Math.round(scrollTop / itemHeight), 0), 
        galleryData.length - 1
      );
      
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  return (
    <GalleryContainer>
      <Info>
        <Logo src={logo} alt='logo' />
        <Head>사진 갤러리</Head>
        <Text>커머셜 포토그래피의 활동 기록을 한 눈에 만나보세요!</Text>

        <ContentWrapper>
          <ImagePreview>
            <div className="image-wrapper">
              {galleryData.map((group, groupIdx) => 
                group.imgs.map((img, imgIdx) => (
                  <img 
                    key={`${groupIdx}-${imgIdx}`} 
                    src={img} 
                    alt={`Preview ${imgIdx}`} 
                    className={activeIndex === groupIdx && currentSubIndex === imgIdx ? 'active' : ''}
                    style={{ 
                      visibility: activeIndex === groupIdx ? 'visible' : 'hidden',
                    }}
                  />
                ))
              )}
              
              {galleryData[activeIndex].imgs.length > 1 && (
                <IndicatorContainer>
                  {galleryData[activeIndex].imgs.map((_, i) => (
                    <Dot key={`${activeIndex}-${i}`} active={currentSubIndex === i} />
                  ))}
                </IndicatorContainer>
              )}
            </div>
          </ImagePreview>

          <ListSection>
            <PinkLine />
            <ListContainer ref={scrollRef} onScroll={handleScroll}>
              <ListInner>
                {galleryData.map((item, index) => (
                  <ListItem 
                    key={item.id} 
                    active={activeIndex === index}
                    // 첫 번째 아이템에 Ref를 걸어 높이를 동적으로 측정합니다.
                    ref={index === 0 ? itemRef : null}
                  >
                    <ItemInfo active={activeIndex === index}>
                      <p className="date">{item.date}</p>
                      <p className="title">{item.title}</p>
                    </ItemInfo>
                    <Thumbnail src={item.thumbnail} alt={item.title} />
                  </ListItem>
                ))}
              </ListInner>
            </ListContainer>
            <PinkLine />
          </ListSection>
        </ContentWrapper>
      </Info>
    </GalleryContainer>
  );
}