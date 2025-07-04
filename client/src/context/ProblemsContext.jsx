import { createContext, useState } from "react";

export const ProblemsContext = createContext();

export const ProblemsProvider = ({ children }) => {
  const [problems, setProblems] = useState([]); // Store fetched problems
  const [tags, setTags] = useState([]);
  const [minRating, setMinRating] = useState("");
  const [maxRating, setMaxRating] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <ProblemsContext.Provider
      value={{
        problems,
        setProblems,
        tags,
        page,
        setPage,
        setTags,
        minRating,
        totalPages,
        setTotalPages,
        setMinRating,
        maxRating,
        setMaxRating,
        searchQuery,
        setSearchQuery,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
      }}
    >
      {children}
    </ProblemsContext.Provider>
  );
};
