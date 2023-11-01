"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Ticketform = () => {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    if (!res.ok) {
      throw new Error("Failed to create Ticket.");
    }

    router.refresh();
    router.push("/");
  };
  const startingTicketData = {
    title: " y",
    description: " ",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };
  const { formData, setFormData } = useState(startingTicketData); //here the  form data is the initial condition
  //while the setform data updates the condition
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handlesubmit}
      >
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onchange={handleChange}
          required={true}
          value={formData}
        />

        <label>Description</label>
        <textarea
          id="Description"
          name="Description"
          onchange={handleChange}
          required={true}
          value={formData}
          rows={5}
        />
        <label>Category</label>
        <select name="category" value={formData} onChange={handleChange}>
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
        <label>Priority</label>
        <div>
          <input
            type="radio"
            id="priorty-1"
            checked={formData == 1}
            value="1"
            onChange={handleChange}
          />
          <label>1</label>
          <input
            type="radio"
            id="priorty-2"
            checked={formData == 2}
            value="2"
            onChange={handleChange}
          />
          <label>2</label>
          <input
            type="radio"
            id="priorty-3"
            checked={formData == 1}
            value="3"
            onChange={handleChange}
          />
          <label>3</label>
          <input
            type="radio"
            id="priorty-4"
            checked={formData == 3}
            value="4"
            onChange={handleChange}
          />
          <label>4</label>
          <input
            type="radio"
            id="priorty-5"
            checked={formData == 5}
            value="5"
            onChange={handleChange}
          />
          <label>5</label>
        </div>
        <label> Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData}
          min="0"
          max={100}
          onChange={handleChange}
        />
        <label>Status</label>
        <select name="status" value={formData} onChange={handleChange}>
          <option value="not started"> Not Started</option>
          <option value="started"> Started</option>
          <option value="done"> Done</option>
        </select>
        <input type="submit" className="btn max-w-xs" value="create Ticket" />
      </form>
    </div>
  );
};

export default Ticketform;
