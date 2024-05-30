import React from "react";
import Joblistitems from "./Joblistitems";

const Jobcontent = ({ jobs }) => {
  return (
    <>
      <Joblistitems jobs={jobs} />
    </>
  );
};

export default Jobcontent;
