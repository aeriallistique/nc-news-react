import './App.css';
import { Routes, Route } from "react-router-dom";
import ArticlesPage from './pages/ArticlesPage';
import SingleArticlePage from './pages/SingleArticlePage';
import CommentsPage from './pages/CommentsPage';
import TopicArticlesPage from './pages/TopicArticlesPage';
import ErrorPage from './pages/ErrorPage';
import { UsersAccountsProvider, UserAccountProvider } from './context/UsersContext';
import Navbar from './components/Navbar';

function App() {


  return (
    <UserAccountProvider>
      <UsersAccountsProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ArticlesPage />} />
          <Route path='/topic/:slug' element={<TopicArticlesPage />} />
          <Route path='/:article_id' element={<SingleArticlePage />} />
          <Route path='/topic/:topic_name/:article_id' element={<SingleArticlePage />} />
          <Route path='/:article_id/comments' element={<CommentsPage />} />
          <Route path='*' element={<ErrorPage />} />

        </Routes>
      </UsersAccountsProvider>
    </UserAccountProvider>
  );
}

export default App;
