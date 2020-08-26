import React from 'react';
import WeddingDate from "../commons/WeddingDate";
import styled from 'styled-components';
import MainImage from '../../images/main.jpg';
import LinkBox from "../commons/LinkBox";

const S = {};
S.MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 38px;
  padding-bottom: 75px;
`;

S.DateWrapper = styled.div`
  padding-top: 38px;
`;

S.Name = styled.div`
  padding-top: 20px;
  text-align: center;
  font-size: 15px;
  color: #585151;
`;

S.Message = styled.div`
  font-size: 13px;
  color: #9e9999;
  padding-top: 10px;
  text-align: center;
`;

S.ImageWrapper = styled.div`
  padding-top: 26px;
  display: flex;
  justify-content: center;
`;

S.LinkBoxWrapper = styled.div`
  position: relative;
  width: 304px;
  height: 76px;
  margin-top: 32px;
  
  &:last-child {
    margin-top: 25px;
  }
`;

function Main() {
  const groom = '최재근';
  const bride = '김초록';
  const message = '온라인 결혼식에 함께 해주세요';

  return (
    <S.MainWrapper>
      <WeddingDate month={"08"} day={"30"}/>
      <S.Name>{groom} ㆍ {bride}</S.Name>
      <S.Message>{message}</S.Message>
      <S.ImageWrapper>
        <img src={MainImage} width={304} height={456} />
      </S.ImageWrapper>
      <S.LinkBoxWrapper>
        <LinkBox
          title={'온라인으로 결혼식 참석하기 →'}
          message={'여기를 누르면 유튜브 라이브방송으로 이동합니다'}
          link={'https://www.youtube.com'}
          titleColor={'#ff5372'}
          messageColor={'#ff5372'}
        />
      </S.LinkBoxWrapper>
      <S.LinkBoxWrapper>
        <LinkBox
          title={'예식장에 참석하는 분들은 여기로 →'}
          message={'여기를 누르면 모바일 청첩장으로 이동합니다'}
          link={'https://wedding-card.github.io/troyandanna_0830/'}
          titleColor={'#585151'}
          messageColor={'#9e9999'}
        />
      </S.LinkBoxWrapper>
    </S.MainWrapper>
  );
}

export default Main;
