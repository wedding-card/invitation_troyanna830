import React from 'react';
import styled from 'styled-components';

const S = {};
S.LinkWrapper = styled.div`
position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid ${({color}) => color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  z-index: 2;
`;
S.LinkWrapperShadow = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 5px;
  left: 9px;
  border: 2px solid ${({color}) => color};
  z-index: 1;
`;
S.Title = styled.div`
  color: ${({color}) => color};
  font-size: 18px;
  font-family: 'Black Han Sans', sans-serif;
`;
S.Message = styled.div`
  color: ${({color}) => color};
  font-size: 12px;
  line-height: 18px;
  margin-top: 4px;
`;

function open(link) {
  window.open(link)
}

const LinkBox = ({title, message, link, titleColor, messageColor}) => {
  return (
    <>
      <S.LinkWrapper color={messageColor} onClick={() => open(link)}>
        <S.Title color={titleColor}>{title}</S.Title>
        <S.Message color={messageColor}>{message}</S.Message>
      </S.LinkWrapper>
      <S.LinkWrapperShadow color={messageColor}/>
    </>
  );
};

export default LinkBox;
