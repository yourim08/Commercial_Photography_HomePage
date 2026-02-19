import { useState } from "react";
import styled from "styled-components";
import logo from '../assets/question.svg';

// --- 기존 레이아웃 유지 ---
const FAQContainer = styled.div`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    height: 1300px;
`;

const Info = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, ${props => props.theme.vh(100)});
    text-align: center;
    width: 100%;
`;

const Logo = styled.img`
    width: ${props => props.theme.vw(140)};
    height: ${props => props.theme.vh(140)};
    margin: auto;
`;

const Head = styled.p`
    padding-top: 20px;
    font-family: 'Pretendard-SemiBold';
    font-size: ${props => props.theme.vw(40)};
    color: #1E1E1E;
`;

const Text = styled.p`
    padding-top: 20px;
    font-family: 'Pretendard-Regular';
    font-size: ${props => props.theme.vw(24)};
    color: #3C3C3C;
`;

// --- FAQ 리스트 (요청사항 반영) ---

const ListContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(${props => props.theme.vh(100 + 140 + 20 + 40 + 20 + 24)} + 150px); 
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-bottom: 150px;
`;

const ItemBox = styled.div`
    width: 980px;
    background-color: ${props => props.color};
    border-radius: 15px;
    cursor: pointer;
    overflow: hidden;
    /* 아주 미세한 드롭 셰도우 */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    /* 슬라이드 애니메이션을 위한 트랜지션 */
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    
    /* 열렸을 때와 닫혔을 때의 높이 제어 */
    max-height: ${props => (props.isOpen ? "500px" : "98px")};
`;

const QuestionRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    height: 98px;
    
    & span {
        font-family: 'Pretendard-Light';
        font-size: 20px;
        color: #1E1E1E;
    }
`;

const QWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const AnswerContent = styled.div`
    position: relative;
    /* 슬라이드 시 내용이 겹치지 않도록 함 */
    opacity: ${props => (props.isOpen ? "1" : "0")};
    transition: opacity 0.3s ease;
    
    /* 답변 텍스트 위치 가이드 반영 */
    padding-top: 33px;
    padding-left: 80px;
    padding-right: 40px;
    padding-bottom: 40px;

    font-family: 'Pretendard-Light';
    font-size: 20px;
    line-height: 1.6;
    color: #3C3C3C;
    white-space: pre-wrap;

    /* 상단 구분선 */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 40px;
        right: 40px;
        border-top: 1px solid #BBBBBB;
    }
`;

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        { q: "커머셜 포토그래피는 어떤 활동을 하는 동아리인가요?", a: "커머셜 포토그래피는 미러리스 카메라와 조명을 이용해 사진을 찍고, 그 사진을 활용한 그래픽 작업도\n함께 하는 동아리입니다.", color: "#F5FBDE" },
        { q: "커머셜 포토그래피에 들어가려면 카메라에 대해 꼭 잘 알아야 하나요?", a: "커머셜 포토그래피에서는 카메라의 기초부터 알려주기 때문에, 카메라에 대한 관심과 열심히\n배우려는 마음만 있다면 카메라에 대해 잘 모르더라도 충분히 괜찮습니다.", color: "#FFEBF4" },
        { q: "소프트웨어과도 커머셜 포토그래피에 지원할 수 있나요?", a: "현재 커머셜 포토그래피는 디자인과 학생만 지원이 가능합니다.", color: "#F5FBDE" },
        { q: "커머셜 포토그래피에 들어가려면 어떤 태도가 필요하나요?", a: "커머셜 포토그래피에서는 동아리 활동에 열심히 참여하려는 태도와, 사진이나 영상에 대한 관심과\n꾸준히 배우려는 자세를 가장 중요하게 봅니다.", color: "#FFEBF4" },
        { q: "커머셜 포토그래피 면접은 어떤 식으로 진행되나요?", a: "면접은 전공 관련 질문과 인성 질문, 그리고 카메라에 대한 기본적인 질문으로 구성되어 있으며,\n면접관 4명과 지원자 1명이 함께 진행하는 1:4 개별 면접입니다.", color: "#F5FBDE" }
    ];

    return (
        <FAQContainer>
            <Info>
                <Logo src={logo} alt='logo' />
                <Head>FAQ</Head>
                <Text>자주 묻는 질문들을 확인해 보세요!</Text>
            </Info>

            <ListContainer>
                {faqData.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <ItemBox 
                            key={index} 
                            color={item.color} 
                            isOpen={isOpen}
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                            <QuestionRow>
                                <QWrapper>
                                    <span>Q</span>
                                    <span>{item.q}</span>
                                </QWrapper>
                                <span style={{fontSize: '24px'}}>{isOpen ? "—" : "+"}</span>
                            </QuestionRow>
                            
                            <AnswerContent isOpen={isOpen}>
                                {item.a}
                            </AnswerContent>
                        </ItemBox>
                    );
                })}
            </ListContainer>
        </FAQContainer>
    );
}