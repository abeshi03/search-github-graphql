// import {useGetGithubName} from "./hooks/api/useGetGithubName";

import {useQuery} from "@apollo/client";
import {SEARCH_REPOSITORIES} from "./query/query";
import React, {useState} from "react";

function App() {

  // const { loading, error, data } = useGetGithubName();
  //
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery({ query: event.target.value });
  }
  const PER_PAGE = 5
  const DEFAULT_STATE = {
    first: PER_PAGE,
    after: null,
    last: null,
    before: null,
    query: "フロントエンドエンジニア"
  }
  type DefaultState = {
    first?: number;
    after?: number | null;
    last?: number | null;
    before?: number | null;
    query?: string | undefined;
  }
  const [{ query, first, last, before, after }, setQuery] = useState<DefaultState>(DEFAULT_STATE)

  return (
    <>
      <h1>グラフキューエルのリポジトリ検索アプリ</h1>
      <input value={query} onChange={handleChange}/>

    </>
  )
}

export default App;
