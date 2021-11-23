import { useMemo } from "react";

export const useSortedPosts = (array, sort) => {
  const sortedArray = useMemo(() => {
    if (sort) {
      return [...array].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return array;
  }, [sort, array]);

  return sortedArray;
};

export const usePosts = (query, array, sort) => {
  const sortedArray = useSortedPosts(array, sort);
  const resultSortedSearch = useMemo(() => {
    return sortedArray.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [sortedArray, query]);

  return resultSortedSearch;
};
