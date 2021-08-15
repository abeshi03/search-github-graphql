import React, {memo, VFC} from "react";

type PaginationProps = {
  query?: string;
  prevPage: boolean;
  nextPage: boolean;
  PrevPage: () => void;
  NextPage: () => void;
}


export const Pagination: VFC<PaginationProps> = memo((props) => {
  const { query, prevPage, nextPage } = props;
  return (
    <>
      { prevPage === true
      &&
      <button>前のページ</button>
      }

      { nextPage === true
      &&
      <button>次のページ</button>
      }
    </>
  );
});


