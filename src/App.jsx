import { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './style/GlobalStyle';

const AppContainer = styled.div`
  background: var(--card-bg);
  padding: 3rem 4rem;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0,0,0,0.03);
  backdrop-filter: blur(10px);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0,0,0,0.03);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  margin-top: 0;
  background: linear-gradient(to right, #4a90e2, #50e3c2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const StyledButton = styled.button`
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  color: white;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:active {
    transform: scale(0.95);
  }
`;

const DecreaseButton = styled(StyledButton)`
  background-color: var(--btn-decrease);
  &:hover {
    background-color: var(--btn-decrease-hover);
    box-shadow: 0 6px 12px rgba(245, 101, 101, 0.3);
    transform: translateY(-2px);
  }
`;

const ResetButton = styled(StyledButton)`
  background-color: var(--btn-reset);
  &:hover {
    background-color: var(--btn-reset-hover);
    box-shadow: 0 6px 12px rgba(113, 128, 150, 0.3);
    transform: translateY(-2px);
  }
`;

const IncreaseButton = styled(StyledButton)`
  background-color: var(--btn-increase);
  &:hover {
    background-color: var(--btn-increase-hover);
    box-shadow: 0 6px 12px rgba(72, 187, 120, 0.3);
    transform: translateY(-2px);
  }
`;

function App() {
  const [count, setCount] = useState(100);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title>Counter : {count}</Title>
        <ButtonGroup>
          {/* 1. 정상: 익명 함수로 감싸서 전달 */}
          <DecreaseButton onClick={() => setCount(count - 1)}>빼기1</DecreaseButton>
          
          {/* 2. 수정: 반드시 () => 를 붙여서 클릭했을 때만 실행되게 함 */}
          <ResetButton onClick={() => setCount(0)}>reset</ResetButton>
          
          {/* 3. 수정: 매개변수 자리를 비우거나 e(event)를 넣고, 로직을 +로 변경 */}
          <IncreaseButton onClick={() => setCount(count + 10)}>더하기10</IncreaseButton>
        </ButtonGroup>
      </AppContainer>
    </>
  );
}

export default App;