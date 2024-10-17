import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="container py-5 border-b text-3xl flex justify-between text-light font-fraunces">
      <h5>badjax</h5>
      <div className="flex gap-5">
        <Link to="/work">work</Link>
        <Link to="/music">music</Link>
      </div>
    </header>
  );
};

export default Header;
