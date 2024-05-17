import React from "react";

const Jobserach = () => {
  return (
    <main>
      <section id="job-search" class="container">
        <h1>Find Your Dream Job</h1>
        <form action="#" method="GET">
          <input
            type="text"
            name="keywords"
            id="keywords"
            placeholder="Keywords"
          />
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
          />
          <select name="category" id="category">
            <option value="">All Categories</option>
            <option value="it">IT</option>
            <option value="finance">Finance</option>
            <option value="marketing">Marketing</option>

            <option value="marketing">Marketing</option>
            <option value="marketing">Marketing</option>
            <option value="marketing">Marketing</option>
            <option value="marketing">Marketing</option>
          </select>
          <input type="submit" value="Search Jobs" />
        </form>
      </section>
    </main>
  );
};

export default Jobserach;
