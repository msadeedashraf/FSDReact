import React, { useEffect, useState } from "react";
import Joblist from "./Joblist";
import Addjob from "./Addjob";

const Jobpage = () => {
  const API_URL = "http://localhost:3500/jobs";

  const [jobs, setJobs] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw new Error(
            "Unfortunately there's no job data available at the moment"
          );

        const listJobs = await response.json();
        setJobs(listJobs);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <main>
      <Joblist
        jobs={jobs}
        setJobs={setJobs}
        fetchError={fetchError}
        isLoading={isLoading}
      />
    </main>
  );
};

export default Jobpage;
