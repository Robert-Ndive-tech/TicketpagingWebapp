import { faX, faXmark, fax } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Deleteblock = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faX}
        className="text -red-400 hover:cursor-pointer hover: text-red-200"
      />
    </div>
  );
};

export default Deleteblock;
