import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className=" bg-[#0F172A] fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center  p-4 shadow-md w-[95%] mx-auto">
        <div className="flex items-center gap-4">
          <div>
            <img className="w-6" src="/src/assets/images/logo.png" alt="" />
          </div>
          <h2 className="font-bold text-2xl font-inter">Clin</h2>
        </div>

        <div className="flex flex-col md:flex-row font-semibold text-gray-700 justify-between items-center gap-2 md:gap-8">
          <NavHashLink
            smooth
            to="/#about"
            className={`relative group px-2 py-1 font-semibold ${
              location.hash === "#about" ? "text-white" : "text-[#374177]"
            }`}
          >
            About
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full origin-left transform transition-all duration-500 ease-in-out 
      ${
        location.hash === "#about"
          ? "scale-x-100 bg-[#316881]"
          : "scale-x-0 bg-[#316881]"
      } group-hover:scale-x-100`}
            />
          </NavHashLink>

          <NavHashLink
            smooth
            to="/#features"
            className={`relative group px-2 py-1 font-semibold ${
              location.hash === "#features" ? "text-white" : "text-[#374177]"
            }`}
          >
            Our Solutions
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full origin-left transform transition-all duration-500 ease-in-out 
      ${
        location.hash === "#features"
          ? "scale-x-100 bg-[#316881]"
          : "scale-x-0 bg-[#316881]"
      } group-hover:scale-x-100`}
            />
          </NavHashLink>

          <NavHashLink
            smooth
            to="/#solutions-in-action"
            className={`relative group px-2 py-1 font-semibold ${
              location.hash === "#solutions-in-action"
                ? "text-white"
                : "text-[#374177]"
            }`}
          >
            In Action
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full origin-left transform transition-all duration-500 ease-in-out 
      ${
        location.hash === "#solutions-in-action"
          ? "scale-x-100 bg-[#316881]"
          : "scale-x-0 bg-[#316881]"
      } group-hover:scale-x-100`}
            />
          </NavHashLink>

          <NavHashLink
            smooth
            to="/#technology"
            className={`relative group px-2 py-1 font-semibold ${
              location.hash === "#technology" ? "text-white" : "text-[#374177]"
            }`}
          >
            Technology
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full origin-left transform transition-all duration-500 ease-in-out 
      ${
        location.hash === "#technology"
          ? "scale-x-100 bg-[#316881]"
          : "scale-x-0 bg-[#316881]"
      } group-hover:scale-x-100`}
            />
          </NavHashLink>

          <NavHashLink
            smooth
            to="/#benefits"
            className={`relative group px-2 py-1 font-semibold ${
              location.hash === "#benefits" ? "text-white" : "text-[#374177]"
            }`}
          >
            Benefits
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full origin-left transform transition-all duration-500 ease-in-out 
      ${
        location.hash === "#benefits"
          ? "scale-x-100 bg-[#316881]"
          : "scale-x-0 bg-[#316881]"
      } group-hover:scale-x-100`}
            />
          </NavHashLink>

          <NavHashLink
            smooth
            to="/#case-use"
            className={`relative group px-2 py-1 font-semibold ${
              location.hash === "#case-use" ? "text-white" : "text-[#374177]"
            }`}
          >
           Case Use
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full origin-left transform transition-all duration-500 ease-in-out 
      ${
        location.hash === "#case-use"
          ? "scale-x-100 bg-[#316881]"
          : "scale-x-0 bg-[#316881]"
      } group-hover:scale-x-100`}
            />
          </NavHashLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
