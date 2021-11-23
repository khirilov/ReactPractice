import React from "react";

import { SelectFilter } from "./SelectFilter.jsx";

function PostFilter({ filter, setFilter }) {
  return (
    <>
      <input
        placeholder="search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <SelectFilter
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="filter"
        options={[
          { value: "title", name: "By name" },
          { value: "info", name: "By info" },
        ]}
      />
    </>
  );
}

export { PostFilter };
