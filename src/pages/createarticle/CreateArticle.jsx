import { useState } from "react";
import Navbar from "../../navbar/Navbar";
import styled from "./createArticle.module.css";
import Input from "../../input/Input";
import Textarea from "../../textarea/Textarea";
import axios from "axios";

function CreateArticle() {
  // const [articleTitle , setArticleTitle ] = useState("")
  const [article, setArticle] = useState({
    title: "",
    date: "",
    readingTime: "",
    athor: "",
    message: "",
    imageUrl: ""
  });

  const changeHandler = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeArticleMessage = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };

  const handleCreateNewArticle = () => {
    axios.post("http://localhost:8000/articles",{
        "id": 9,
    "imageUrl": article.imageUrl,
    "title": article.title,
    "readingTime":article.readingTime ,
    "date": article.date,
    "athor": article.athor,
    "content": article.message
    })
    
  }

//   console.log(article);

  return (
    <>
      <Navbar title="علیرضا بلاگ" />
      <div className={styled.createArticlePage}>
        <div className="container">
          <h1>ساخت مقاله</h1>
          <Input
            lable="عنوان"
            name="title"
            change={changeHandler}
            type="text"
          />
          <Input lable="تاریخ" name="date" change={changeHandler} type="text" />
          <Input
            lable="مدت زمان خواندن"
            name="readingTime"
            change={changeHandler}
            type="text"
          />
          <Input
            lable="نویسنده"
            name="athor"
            change={changeHandler}
            type="text"
          />
          <Input
            lable="آدرس عکس"
            name="imageUrl"
            change={changeHandler}
            type="text"
          />
          <Textarea lable="متن" change={handleChangeArticleMessage} />
          <div className={styled.buttonWrapper}>
            <button onClick={handleCreateNewArticle}>ساخت مقاله</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateArticle;
