import { createContext, Dispatch, FC, useContext, useState } from "react";

interface SearchContextValue {
  text: string;
  setText: Dispatch<string>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const SearchContext = createContext<SearchContextValue>({ text: "", setText: () => {} });

export function provideSearch<T extends JSX.IntrinsicAttributes>(Component: FC<T>){
  return (props: T) => {
    const [text, setText] = useState("");

    return (
      <SearchContext.Provider value={{ text, setText }}>
        <Component {...props} />
      </SearchContext.Provider>
    )
  }
}

export const useSearch = () => useContext(SearchContext);
