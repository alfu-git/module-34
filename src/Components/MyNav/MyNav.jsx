import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const MyNav = ({ navItems }) => {
  const [status, setStatus] = useState(false);
  const navItem = navItems.map((item) => (
    <li key={item.id}>
      <a className="text-base-300 font-medium" href={item.path}>
        {item.name}
      </a>
    </li>
  ));

  return (
    <div className="bg-primary py-3">
      <div className="flex justify-between items-center container mx-auto px-5">
        <div className="flex items-center gap-2">
          <div className="relative lg:hidden">
            <button
              className="btn btn-ghost"
              onClick={() => setStatus(!status)}
            >
              {status ? (
                <X className="text-base-100"></X>
              ) : (
                <Menu className="text-base-100"></Menu>
              )}
            </button>
            <ul
              className={`
                  absolute z-50 mt-3 bg-base-300 backdrop-blur-md py-2 duration-300 transition-all transform
                  ${status ? "translate-y-0 opacity-100" : "opacity-0 -translate-y-4 pointer-events-none"}
                `}
            >
              {navItems.map((item) => (
                <li className="px-4 hover:bg-neutral-300" key={item.id}>
                  <a
                    onClick={() => setStatus(false)}
                    className="text-lg font-medium"
                    href={item.path}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button className="btn btn-ghost">
            <h1 className="text-base-100 hover:text-neutral-700 text-3xl font-semibold ">
              My NavBar
            </h1>
          </button>
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-6 items-center">{navItem}</ul>
        </div>

        <div>
          <button className="btn text-primary text-base font-bold">
            LogIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyNav;
