import { useEffect, useState } from 'react';
import './App.css';
import ArticlesList from './components/ArticlesList';

function App() {


  return (
    <div className="main-container w-11/12 h-auto border m-auto">
      <nav className="navbar w-full h-16 border border-b-blue-600">
        <p>NAVBAR HERE</p>
      </nav>
      <ArticlesList />
    </div>

  );
}

export default App;
