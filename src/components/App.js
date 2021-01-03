import React, { useState } from "react";
import "../App.css";
import Article from "./Article";
import Header from "./Header";
import Search from "./Search";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [sortValue, setSortValue] = useState("relevance");
  //testing git commit
  //set sort value according to selection
  const handleSortInputChanges = (e) => {
    setSortValue(e.target.value);
  };

  //get searched articles
  const search = (searchValue) => {
    console.log("search value", searchValue);
    console.log("sortValue", sortValue);
    fetch(
      `http://newsapi.org/v2/everything?q=${searchValue}&language=en&sortBy=${sortValue}&apiKey=e8beefd6ada2467e93fbc952cd0aa753`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setArticles(jsonResponse.articles);
      });
  };

  return (
    <div className="App">
      <Header text="News Search" />
      <div className="search-section">
        <select
          className="select"
          value={sortValue}
          onChange={handleSortInputChanges}
          type="text"
        >
          <option selected value="relevancy">
            Relevance
          </option>
          <option value="popularity">Popularity</option>
          <option value="publishedAt">Date</option>
        </select>
        <Search search={search} />
      </div>

      <div className="articles">
        {articles.map((article, index) => (
          <Article key={`${index}-${article.title}`} article={article} />
        ))}
      </div>
    </div>
  );
};

export default App;
