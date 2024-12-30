import Navbar from "../../navbar/Navbar";
import styled from "./home.module.css";
import Article from "../../article/Article";

import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import Spinner from "../../spinner/Spinner";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((res) => {
        setArticles(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="علیرضا بلاگ" />

      <div className="container">
        <h2>مقالات جدید</h2>

        {isloading ? (
          <Spinner />
        ) : (
          <div className={styled.articles}>
            {articles.map((article) => (
              <Link to={`/article/${article.id}`} key={article.id}>
                <Article article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
