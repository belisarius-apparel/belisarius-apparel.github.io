import React from "react";
import Countdown from "../../components/CountDown";

const Maintenance = () => {
  document.title = "Under Maintenance | Belisarius Official Website";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100">
      <div>
        <img
          src="/images/maintenance.gif"
          alt="Maintenance Animation"
          className="block m-auto mb-4"
        />
        <div className="text-center">
          <h1 className="mb-4 text-3xl text-blue-400 uppercase poppins-bold">
            We Are Tidying Up!
          </h1>
          <p className="mb-2 quicksand-light">
            We're working on it, expected to launch in
          </p>
          <Countdown datetime="2024-12-28T23:59:59" />
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
