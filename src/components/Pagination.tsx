import React, {memo, useContext, VFC} from "react";
import {PER_PAGE, SearchGithubQueryContext} from "../providers/SearchGithubQueryProvider";


type PaginationProps = {
  prevPage: boolean;
  nextPage: boolean;
  endCursor: string;
}


export const Pagination: VFC<PaginationProps> = memo((props) => {
  const { prevPage, nextPage, endCursor } = props;
  const { setQuery, query } = useContext<any>(SearchGithubQueryContext);

  const onClickNextPage = (): void => {
    setQuery({
      first: PER_PAGE,
      after: endCursor,
      last: null,
      before: null,
      query: query
    })
  }

  const onClickPrevPage = (): void => {
    setQuery({
      first: PER_PAGE,
      after: null,
      last: null,
      before: null,
      query: query
    })
  }

  return (
    <>
      { prevPage === true
      &&
      <button onClick={onClickPrevPage}>前のページ</button>
      }

      { nextPage === true
      &&
      <button onClick={onClickNextPage}>次のページ</button>
      }
    </>
  );
});


