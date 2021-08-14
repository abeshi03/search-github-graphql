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

  // - props ===========================================================================================================
  const { query, first, last, before, after } = props;

  // - カスタムフック =====================================================================================================
  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables: { query, first, last, before, after }
  })

  // - ローディング ======================================================================================================
  if (loading) return <p>Loading...</p>;

  // - エラー ===========================================================================================================
  if (error) return <p>Error :(</p>;

  const search = data.search;

  // - jsx =============================================================================================================
  return (
    <>
      <ul>
        {
          search.edges.map((edge: any) => {
            const node = edge.node;
            return (
              <li key={node.id}>
                <a href={node.url} target="_blank" rel="noopener noreferrer">{node.name}</a>
              </li>
            )
          })
        }
      </ul>
    </>
  );
})
