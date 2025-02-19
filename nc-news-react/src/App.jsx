import './App.css';
import { Routes, Route } from "react-router-dom";
import ArticlesPage from './pages/ArticlesPage';
import SingleArticlePage from './pages/SingleArticlePage';
import CommentsPage from './pages/CommentsPage';
import TopicArticlesPage from './pages/TopicArticlesPage';
import { UsersAccountsProvider, UserAccountProvider } from './context/UsersContext';

function App() {


  return (
    <UserAccountProvider>
      <UsersAccountsProvider>
        <Routes>
          <Route path='/' element={<ArticlesPage />} />
          <Route path='/topic/:slug' element={<TopicArticlesPage />} />
          <Route path='/:article_id' element={<SingleArticlePage />} />
          <Route path='/:article_id/comments' element={<CommentsPage />} />

        </Routes>
      </UsersAccountsProvider>
    </UserAccountProvider>
  );
}

export default App;
