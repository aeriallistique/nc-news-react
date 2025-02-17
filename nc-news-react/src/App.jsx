import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import ArticlesList from './components/ArticlesList';
import Navbar from './components/Navbar';
import ArticlesPage from './pages/ArticlesPage';
import SingleArticlePage from './pages/SingleArticlePage';

function App() {


  return (
    <Routes>
      <Route path='/' element={<ArticlesPage />} />
      <Route path='/:article_id' element={<SingleArticlePage />} />

    </Routes>
  );
}

export default App;
