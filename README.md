# React Counter App (lecture01_A_Counter)

이 프로젝트는 React의 기본 훅(Hook)인 `useState`와 이벤트 핸들러(Event Handler)의 올바른 사용법을 익히기 위한 간단한 카운터 애플리케이션입니다.

## 📌 주요 코드 설명 (`src/App.jsx`)

### 1. 상태 관리 (`useState`)
```jsx
// React 패키지에서 useState를 불러옵니다.
import { useState } from 'react';

// 초기값이 100인 상태 변수 count와 이를 변경할 수 있는 함수 setCount를 선언합니다.
const [count, setCount] = useState(100);
```
- 컴포넌트 내부에서 변경될 수 있는 데이터(상태)를 관리하기 위해 `useState`를 사용합니다.
- 초기값으로 `100`을 설정했으며, `setCount` 함수를 통해서만 이 값을 안전하게 변경할 수 있습니다.

### 2. 이벤트 핸들러와 `onClick`
버튼 클릭 이벤트를 처리할 때 **반드시 콜백 함수(익명 함수)의 형태**로 전달해야 합니다.

#### 올바른 예시 O
```jsx
<button onClick={() => setCount(count - 1)}>빼기1</button>
<button onClick={() => setCount(0)}>reset</button>
<button onClick={() => setCount(count + 10)}>더하기10</button>
```
위와 같이 `() => ...` 형태의 화살표 함수로 감싸서 전달하면, **버튼을 "클릭했을 때"만** 함수가 실행됩니다.

#### 잘못된 예시 X
```jsx
// ❌ 이렇게 작성하면 렌더링될 때 즉시 실행되어 무한 루프 에러가 발생합니다.
<button onClick={setCount(0)}>reset</button>
```
그대로 `setCount()`를 괄호와 함께 작성하면 렌더링하는 도중에 함수가 바로 실행되어 버립니다. 결과적으로 상태를 변경하고 재렌더링하고, 다시 함수를 실행하는 **무한 루프(Too many re-renders)**에 빠지게 됩니다. 

### 3. 스타일링 (`src/App.css`)
단순한 형태의 틀에 그치지 않고, `App.css`를 사용하여 밝고 모던한 UI(Light Theme)를 적용했습니다. 버튼 그룹에 깔끔한 Glassmorphism 기반의 배경과 Hover 효과(마우스를 올렸을 때 애니메이션과 그림자)를 추가하였습니다.
```jsx
// CSS 파일을 불러와 클래스 네임을 적용합니다.
import './App.css';

// ...
<div className="app-container">
```

## 🚀 실행 방법
```bash
npm install # 또는 pnpm install
npm run dev # 또는 pnpm run dev
```
