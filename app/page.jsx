import React from "react";

import Ticketcard from "./(components)/Ticketcard";

const Dashboard = () => {
  return (
    <div className="p-5">
      Dashboard
      <div className="lg:grid grid-cols-2 xl-grid-cols-1">
        <Ticketcard />
        <Ticketcard />
        <Ticketcard />
        <Ticketcard />
      </div>
    </div>
  );
};
export default Dashboard;
