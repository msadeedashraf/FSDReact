import React from "react";

const Searchjob = ({ search, setSearch }) => {
  return (
    <form>
      <label> Search Job </label>
      <input
        id="serach"
        type="text"
        placeholder="Search job title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Searchjob;
