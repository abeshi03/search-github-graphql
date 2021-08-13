import {useQuery} from "@apollo/client";
import {SEARCH_REPOSITORIES} from "./query/query";
import React, {useState} from "react";

function App() {

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
  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables: { query, first, last, before, after }
  })

  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <h1>グラフキューエルのリポジトリ検索アプリ</h1>
      <input value={query} onChange={handleChange}/>
      {data.search.edges.map((edge: any) => {
        return (
          <li key={edge.node.id}>
            <a href={edge.node.url} target="_blank" rel="noopener noreferrer">{edge.node.name}</a>
          </li>
        )
      })}
    </>
  )
}

export default App;
