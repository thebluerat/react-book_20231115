import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import HistorySample from './HIstorySample';

const App =()=> {
  return(
    <>
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/history">History 예제</Link>
          </li>
        </ul>
        <hr/>
        <Routes>
          <Route path="/" element={<Home/>} exact={true}/>
          <Route path="/about" element={<About/>} exact={true}/>
          <Route path="/history" element={<HistorySample/>} exact={true}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
