import { faIls } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Prioritydisplay = () => {
  return (
    <div className="flex justify-start align-baseline">
      {" "}
      <FontAwesomeIcon icon={faIls} className="text-red-400" />
      <FontAwesomeIcon icon={faIls} className="text-red-400" />
      <FontAwesomeIcon icon={faIls} className="text-red-400" />
      <FontAwesomeIcon icon={faIls} className="text-red-400" />
      <FontAwesomeIcon icon={faIls} className="text-red-400" />
    </div>
  );
};

export default Prioritydisplay;
