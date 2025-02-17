import Navbar from "../components/Navbar";
import ArticlesList from "../components/ArticlesList";
import Footer from "../components/Footer";

const ArticlesPage = () => {
  return (
    <div className="main-container w-11/12 h-auto m-auto">
      <Navbar />
      <ArticlesList />
      <Footer />
    </div>
  );
};

export default ArticlesPage;