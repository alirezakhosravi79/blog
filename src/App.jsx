import NotFound from "./pages/404/NotFound";
import About from "./pages/aboutus/About";
import ArticlePage from "./pages/article/ArticlePage";
import CreateArticle from "./pages/createarticle/CreateArticle";
import Home from "./pages/home/Home";
import { Route , Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/about" element={ <About />}/>
        <Route path="/article/:id" element={<ArticlePage/> }/>
        <Route path="/create-article" element={ <CreateArticle /> }/>
        <Route path="*" element={<NotFound />}/>
      </Routes>

    </div>
  );
}

export default App;
