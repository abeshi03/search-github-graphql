import React, {useState} from "react";
import {DefaultState, SearchInput} from "./components/SearchInput";

function App() {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDisplaySearch(false)
    setQuery({
      ...DEFAULT_STATE,
      query: event.target.value
    });
  }
  const PER_PAGE = 5
  const DEFAULT_STATE = {
    first: PER_PAGE,
    after: null,
    last: null,
    before: null,
    query: ""
  }
  const [{ query, first, last, before, after }, setQuery] = useState<DefaultState>(DEFAULT_STATE);
  const [ displaySearch, setDisplaySearch ] = useState<boolean>(false);

  return (
    <React.Fragment>
      <h1>グラフキューエルのリポジトリ検索アプリ</h1>
      <input value={query} onChange={handleChange}/>
      <button onClick={() => setDisplaySearch(!displaySearch)}>検索</button>
      { displaySearch &&
        <SearchInput
          first={first}
          query={query}
          last={last}
          before={before}
          after={after}
        />
      }
    </React.Fragment>
  )
}

export default App;
