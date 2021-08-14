import React, {memo, VFC} from "react";

type PaginationProps = {
  query?: string;
  prevPage?: () => void;
  nextPage?: () => void;
}

export const Pagination: VFC<PaginationProps> = memo((props) => {
  const { query, prevPage, nextPage } = props;
  return (
    // <>
    //   { search.pageInfo.hasPreviousPage === true
    //   &&
    //   <button>前のページ</button>
    //   }
    //
    //   {search.pageInfo.hasNextPage === true
    //   &&
    //   <button>次のページ</button>
    //   }
    // </>
    null
  );
});
