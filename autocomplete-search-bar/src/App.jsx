import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const getSearchResult = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`);
      const json = await response.json();
      setSearchResult(json.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSearchResult()
  }, [searchValue])
  

  return (
    <div>
      <h1>Autocomplete Search Bar</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          onChange={e => setSearchValue(e.target.value)}
        />
        <div className="search-result">
          {searchResult.map(result => (
            <span key={result.id}>{result.title}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
