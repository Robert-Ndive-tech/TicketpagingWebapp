import React from "react";

<<<<<<< HEAD
import Ticketcard from "./(components)/Ticketcard";
=======
import Ticketcard from "./components/Ticketcard";
>>>>>>> 62e4656... continue_changes

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div className="lg:grid grid-cols-2 xl-grids-cols-4">
        <Ticketcard />
        <Ticketcard />
        <Ticketcard />
        <Ticketcard />
      </div>
    </div>
  );
};
export default Dashboard;
