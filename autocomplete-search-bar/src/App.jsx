import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [cache, setCache] = useState({})

  const getSearchResult = async () => {
    if (cache[searchValue]) {
      setSearchResult(cache[searchValue])
      return
    }
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchValue}`
      );
      const json = await response.json();
      setSearchResult(json.products);
      setCache(prev=>({...prev,[searchValue]:json.products}))
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(getSearchResult, 500);
    return ()=>{
       clearTimeout(timer)
    }
  }, [searchValue]);

  return (
    <div>
      <h1>Autocomplete Search Bar</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          onChange={e => setSearchValue(e.target.value)}
        />
        {searchResult.length > 0 && (
          <div className="search-result">
            {searchResult.map(result => (
              <span key={result.id}>{result.title}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
