import React from "react";

const Jobitem = ({ job }) => {
  return (
    <div className="job-listing">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default Jobitem;
