import React from "react";
import ListRoom from "../components/home/listroom/ListRoom";

const Homepage = () => {
  return (
    <div>
      <h3 className="font-semibold text-2xl text-center">Địa điểm du lịch </h3>
      {/* list room */}
      <ListRoom />
    </div>
  );
};

export default Homepage;
