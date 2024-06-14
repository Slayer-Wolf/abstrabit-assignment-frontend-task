import React from "react";

const Header = ({ name }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h1 className="text-3xl font-bold">Welcome, {name}</h1>
    </div>
  );
};

export default Header;
