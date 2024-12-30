import Footer from "../../footer/Footer";
import Navbar from "../../navbar/Navbar";
import styled from "./article.module.css";
import pic from "../../../src/image/glass.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../spinner/Spinner";

function ArticlePage() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((res) => {
        setArticle(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar title="علیرضا بلاگ" />

      <div className={styled.articleWrapper}>
        <div className="container">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <h1>{article.title}</h1>
              <div className={styled.articleInfo}>
                <span>{article.date}</span>
                <span>{article.athor}</span>
                <span>مدت زمان خواندن : {article.readingTime} دقیقه</span>
              </div>

              <img src={article.imageUrl} alt="article" />

              <p>{article.content}</p>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ArticlePage;
