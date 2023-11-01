import React from "react";

import Ticketcard from "./(components)/Ticketcard";

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
