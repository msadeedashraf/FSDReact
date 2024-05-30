import React, { useState } from "react";
import apiRequest from "./apiRequest";

const Addjob = ({ jobs, setJobs }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const API_URL = "http://localhost:3500/jobs";

  const addJob = async (title, city, company, description, setFetchError) => {
    const id = jobs.length ? jobs[jobs.length - 1].id + 1 : 1;
    const newJob = { id, title, city, company, description };
    setJobs([...jobs, newJob]);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    };
    const result = await apiRequest(API_URL, postOptions);

    if (result) setFetchError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle && !newCity && !newCompany && !newDescription) return;
    console.log(
      `${newTitle} - ${newCity} - ${newCompany} -  ${newDescription}`
    );
    addJob(newTitle, newCity, newCompany, newDescription);
    setNewTitle("");
    setNewCity("");
    setNewCompany("");
    setNewDescription("");
  };

  return (
    <main>
      <section id="add-form-section">
        <h2>Add Jobs</h2>
        <div className="add-form-div">
          <form id="add-form" onSubmit={handleSubmit}>
            <label for="title">Title</label>
            <input
              type="text"
              name="Title"
              id="title"
              placeholder="Job Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />

            <span class="text-danger"></span>

            <div>
              <label for="company">Company</label>
              <input
                type="text"
                name="Company"
                id="company"
                placeholder="Company"
                value={newCompany}
                onChange={(e) => setNewCompany(e.target.value)}
              />
              <span class="text-danger"></span>
            </div>
            <div>
              <label for="city">City</label>
              <input
                type="text"
                name="City"
                id="city"
                placeholder="City"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
              />
              <span class="text-danger"></span>
            </div>
            <div>
              <label for="description">Description</label>
              <input
                type="text"
                name="Description"
                id="description"
                placeholder="Job Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <span class="text-danger"></span>
            </div>

            <button type="submit">Add Jobs</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Addjob;
