import React from "react";
import Deleteblock from "./deleteblock";
import Prioritydisplay from "./proiritydisplay";
import ProgressBar from "./ProgressBar";
import Statusdisplay from "./statusdisplay";

const Ticketcard = () => {

  return (
    <div className="flex flex-col bg-card hover:bg card.hover rounded-md shadow-lg p-3 m-2">
      <div className="flex nb-3">
      <div className="flex mb-3">

        <Prioritydisplay />
      </div>
      <div className="ml-auto">
        <Deleteblock />
      </div>
      <div>
        <h4>Ticket Title</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitsespace-pre-wrap">this is the ticketr description</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2"></div>
        <div className="flex flex-col">
          <p className="text-x1 my-1">00/31/23 10:43 PM</p>
          <ProgressBar />
        </div>
        <div className="m1-aut flex items-endo">
          {" "}
        <p className="whitespace-pre-wrap">this is the ticket description</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2"></div>
        <div className="flex flex-col">
          <p className="text-x1 my-1">00/31/23 10:43PM</p>
          <ProgressBar />
        </div>
        <div className="m1-auto flex items-end">
          <Statusdisplay />
        </div>
      </div>
    </div>
  );}



export default Ticketcard;
