import React, {memo, VFC} from "react";
import {useQuery} from "@apollo/client";
import {SEARCH_REPOSITORIES} from "../query/query";

export type DefaultState = {
  first?: number;
  after?: number | null;
  last?: number | null;
  before?: number | null;
  query?: string | undefined;
}

export const SearchInput: VFC<DefaultState> = memo((props) => {
  const { query, first, last, before, after } = props;

  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables: { query, first, last, before, after }
  })
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data)
  return (
    <>
      {data.search.edges.map((edge: any) => {
        return (
          <li key={edge.node.id}>
            <a href={edge.node.url} target="_blank" rel="noopener noreferrer">{edge.node.name}</a>
          </li>
        )
      })}
    </>
  );
});
