import { useEffect, useState } from 'react';
import './App.css';
import ArticlesList from './components/ArticlesList';
import Navbar from './components/Navbar';

function App() {


  return (
    <div className="main-container w-11/12 h-auto m-auto">
      <Navbar />
      <ArticlesList />
    </div>

  );
}

export default App;
