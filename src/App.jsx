import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter : {count}</h1>
      {/* 1. 정상: 익명 함수로 감싸서 전달 */}
      <button onClick={() => setCount(count - 1)}>빼기</button>
      
      {/* 2. 수정: 반드시 () => 를 붙여서 클릭했을 때만 실행되게 함 */}
      <button onClick={() => setCount(0)}>reset</button>
      
      {/* 3. 수정: 매개변수 자리를 비우거나 e(event)를 넣고, 로직을 +로 변경 */}
      <button onClick={() => setCount(count + 10)}>더하기</button>
    </div>
  );
}

export default App;