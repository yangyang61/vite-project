import React, { useState } from 'react';
import logo from './logo.svg';
import './App.less';
import ins from '@assets/ins.svg';
import Header from './components/Header';
// import Worker from './example.js?worker';

// // 1. 初始化 Worker 实例
// const worker = new Worker();
// // 2. 主线程监听 worker 的信息
// worker.addEventListener('message', (e) => {
//   console.log(e);
// });

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <Header />
        <img src={logo} className="app-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <img src={ins} alt="ins" />
        <p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="app-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
