import React from "react";
import question_mark from "../question_mark.png";

const Article = ({ article }) => {
  return (
    <div className="article-grid-item">
      <div>
        <a href={article.url} target="blank">
          <img
            alt={`Article: ${article.title}`}
            src={
              article.urlToImage === "N/A" ? question_mark : article.urlToImage
            }
          />
        </a>

        <h3 className="title">{article.title}</h3>
        <p className="description">{article.description}</p>
        <p className="date">Published: {article.publishedAt}</p>
        <button className="read-more">
          <a href={article.url} target="blank">
            Read more
          </a>
        </button>
      </div>
    </div>
  );
};

export default Article;
