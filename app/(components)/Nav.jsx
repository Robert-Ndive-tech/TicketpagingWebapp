import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
<<<<<<< HEAD
          <FontAwesomeIcon icon={faHome} className="icon" />{" "}
        </Link>
        <Link href="/Ticketpage">
          <FontAwesomeIcon icon={faTicket} className="icon" />{" "}
=======
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="http://localhost:3000/Ticketpage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
>>>>>>> 6c7049b... continue_changes
        </Link>
      </div>
      <div>
        <p className="text-default-text align-middle">robert@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
