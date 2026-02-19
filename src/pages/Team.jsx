import React from "react";
import styled from "styled-components";
import MemberCard from "../components/MemberCard";
import { secondGen, thirdGen } from "../data/teamdata";
import four_leaf from "../assets/members_logo.svg";

const TeamContainer = styled.div`
    -webkit-user-select: none;
    user-select: none;
    width: 100%;
`;

const Info = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, ${props => props.theme.vh(100)});
    text-align: center;
    justify-content: center;
`;

const Logo = styled.img`
    width: ${props => props.theme.vw(140)};
    height: ${props => props.theme.vh(140)};
    margin: auto;
`;

const Head = styled.p`
    padding-top: 40px;
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

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${props => props.theme.vh(522)}; // Equipment의 Nav 위치와 동일하게 시작
    gap: ${props => props.theme.vh(80)};
    padding-bottom: ${props => props.theme.vh(100)};
`;

const GenerationSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const MemberGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); // 기존 그리드 형식 유지
    gap: ${props => props.theme.vh(54)} ${props => props.theme.vw(50)};
`;

const Team = () => {
  return (
    <TeamContainer>
      <Info>
        <Logo src={four_leaf} alt="로고" />
        <Head>부원 소개</Head>
        <Text>커머셜 포토그래피의 부원을 소개합니다!</Text>
      </Info>

      <ContentWrapper>
        <GenerationSection>
          <MemberGrid>
            {secondGen.map((member, idx) => (
              <MemberCard key={idx} {...member} />
            ))}
          </MemberGrid>
        </GenerationSection>

        <GenerationSection>
          <MemberGrid>
            {thirdGen.map((member, idx) => (
              <MemberCard key={idx} {...member} />
            ))}
          </MemberGrid>
        </GenerationSection>
      </ContentWrapper>
    </TeamContainer>
  );
};

export default Team;