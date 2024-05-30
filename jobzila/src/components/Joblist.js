import React, { useState } from "react";

import Jobcontent from "./Jobcontent";
import Searchjob from "./Searchjob";

const Joblist = ({ jobs, setJobs, fetchError, isLoading }) => {
  const [search, setSearch] = useState("");

  //jobs.filter((job) => job.title.toLowerCase().includes(search.toLowerCase()));

  //const filteredJobs = jobs.filter((job) =>job.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <main>
      <section id="job-listings" class="container">
        <h2>Job Listings</h2>
        <Searchjob search={search} setSearch={setSearch} />

        <div id="job-listings-container">
          {isLoading && <p> Please wait while data being loaded... </p>}
          {fetchError && (
            <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
          )}

          {!fetchError && !isLoading && <Jobcontent jobs={jobs} />}
        </div>
      </section>
    </main>
  );
};

export default Joblist;
