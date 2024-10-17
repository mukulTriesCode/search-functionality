import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="container py-5 border-b text-3xl flex justify-between text-light font-fraunces">
      <h5>
        <Link className="cursor-none" to="/">badjax</Link>
      </h5>
      <div className="flex gap-5">
        <Link className="cursor-none" to="/work">work</Link>
        <Link className="cursor-none" to="/music">music</Link>
      </div>
    </header>
  );
};

export default Header;
