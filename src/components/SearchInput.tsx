import React, {memo, VFC} from "react";
import {useQuery} from "@apollo/client";
import {SEARCH_REPOSITORIES} from "../query/query";
import {Search } from "../type/github/SearchGithub";
import {Node} from "../type/github/SearchGithub";
import {Pagination} from "./Pagination";

export type DefaultState = {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: number | null;
  query?: string | undefined;
}

export const SearchInput: VFC<DefaultState> = memo((props) => {

  // - props ===========================================================================================================
  const { query, first, last, before, after } = props;

  // - API =====================================================================================================
  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables: { query, first, last, before, after }
  })

  // - ローディング ======================================================================================================
  if (loading) return (
    <>
      <div className={"loading"}></div>
      <div className={"loading-1"}></div>
      <div className={"loading-2"}></div>
      <div className={"loading-3"}></div>
    </>
  );

  // - エラー ===========================================================================================================
  if (error) return <p>Error :(</p>;

  // - 定数 ===========================================================================================================
  const search: Search = data.search;

  // - jsx =============================================================================================================
  return (
    <>
      <ul>
        {
          search.edges.map((edge) => {
            const node: Node = edge.node;
            return (
              <li key={node.id}>
                <a href={node.url} target="_blank" rel="noopener noreferrer">{node.name}</a>
              </li>
            )
          })
        }
      </ul>
      <Pagination
        prevPage={search.pageInfo.hasPreviousPage}
        nextPage={search.pageInfo.hasNextPage}
        endCursor={search.pageInfo.endCursor}
      />
    </>
  );
});




