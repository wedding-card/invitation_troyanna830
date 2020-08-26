import React from 'react';

import Main from "./components/Main/Main";
import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y proximity;
  width: 100vw;
  height: 100%;
`;

S.Content = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  width: 100%;
`;

function App() {
  return (
    <S.Wrapper>
      <S.Content>
        <Main />
      </S.Content>
    </S.Wrapper>
  );
}

export default App;
