import React, {createContext, useState} from "react";
import {DefaultState} from "../components/SearchInput";

export const SearchGithubQueryContext = createContext({})

const PER_PAGE = 20

export const DEFAULT_STATE = {
  first: PER_PAGE,
  after: null,
  last: null,
  before: null,
  query: ""
}

export const SearchGithubQueryProvider = (props: any) => {
  const [{ query, first, last, before, after }, setQuery] = useState<DefaultState>(DEFAULT_STATE);
  const { children } = props;

  return (
    <SearchGithubQueryContext.Provider value={{query, first, last, before, after, setQuery}}>
      {children}
    </SearchGithubQueryContext.Provider>
  );
}
