import React, {createContext, Dispatch, ReactNode, SetStateAction, useState, VFC} from "react";
import {DefaultState} from "../components/SearchInput";

export type ContextType = {
  setQuery: Dispatch<SetStateAction<DefaultState>>;
} & DefaultState;

export const SearchGithubQueryContext = createContext<ContextType>({} as ContextType)

export const PER_PAGE = 20

export const DEFAULT_STATE = {
  first: PER_PAGE,
  after: null,
  last: null,
  before: null,
  query: ""
}

type Props = {
  children: ReactNode
}

export const SearchGithubQueryProvider: VFC<Props> = (props) => {
  const [{ query, first, last, before, after }, setQuery] = useState<DefaultState>(DEFAULT_STATE);
  const {children} = props;

  return (
    <SearchGithubQueryContext.Provider value={{query, first, last, before, after, setQuery}}>
      {children}
    </SearchGithubQueryContext.Provider>
  );
}
