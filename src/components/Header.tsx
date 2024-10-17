import React from "react";
import { Link } from "react-router-dom";

const headerData = {
  title: "Mukul Sharma",
  navLinks: [
    {
      label: "work",
      url: "/work",
    },
    {
      label: "music",
      url: "/music",
    },
  ],
};

const Header: React.FC = () => {
  return (
    <header className="container py-5 border-b text-3xl flex justify-between text-light font-fraunces">
      <h5>
        <Link className="cursor-none" to="/">
          {headerData?.title}
        </Link>
      </h5>
      <div className="flex gap-5">
        {headerData?.navLinks.map((val) => (
          <Link key={val?.url} className="cursor-none" to={val?.url}>
            {val?.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
