import React from "react";
import { Link } from "react-router-dom";
import { HeaderData } from "../utils/types";

const Header: React.FC<{ headerData: HeaderData }> = ({ headerData }) => {
  return (
    <header className="container py-5 border-b text-3xl flex justify-between text-light font-fraunces">
      {headerData?.title && (
        <h5>
          <Link className="cursor-none" to="/">
            {headerData?.title}
          </Link>
        </h5>
      )}
      <div className="flex gap-5">
        {headerData?.navLinks.map((val) => (
          <React.Fragment key={val?.url}>
            {val?.label && (
              <Link
                className="cursor-none hover:underline decoration-2 underline-offset-4"
                to={val?.url}
              >
                {val?.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </header>
  );
};

export default Header;
