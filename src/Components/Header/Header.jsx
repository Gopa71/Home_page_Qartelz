import React, { useContext } from "react";
import header1 from "../../assets/images/img2.jpg";
import { Switch } from "@material-tailwind/react";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const Header = ({ topRef }) => {
  const { theme, handleTheme } = useContext(ThemeBgContext);

  return (
    <div
      ref={topRef}
      className="mx-auto h-screen flex justify-center items-center overflow-hidden"
    >
      <div className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center w-full">
        <div className="sm:w-full sm:pl-4 w-4/5 pl-24">
          <Switch
            label={theme === "light" ? "Switch to Dark" : "Switch to Light"}
            defaultChecked={theme === "dark" ? true : false}
            onClick={handleTheme}
          />
          <h1
            className={
              theme === "light"
                ? "sm:text-3xl text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                : "sm:text-3xl text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white"
            }
          >
             Qartelz{" "}
            <span
              className={
                theme === "light"
                  ? "sm:text-4xl text-dark text-6xl font-petitFormal font-bold"
                  : "sm:text-4xl text-white text-6xl font-petitFormal font-bold"
              }
            >
              
            </span>{" "}
            FinTech Solution
          </h1>
          <div className="mt-4">
          <p
  className={
    theme === "light"
      ? "sm:text-lg w-4/5 font-italic font-medium no-underline align-middle tracking-wide normal-case text-dark text-1xl flex justify-between"
      : "sm:text-lg w-4/5 font-italic font-medium no-underline align-middle tracking-wide normal-case text-white text-1xl flex justify-between"
  }
>
  Discover Qartelz Fintech India's Premier Fintech vanguard,
  Revolutionizing Financial Analytics and Management Software for
  Global Financial Institution and EdTech Platforms.
</p>

          </div>
          <div className="pb-20">
            <button className="pushable mt-4">
              <span className="front">Start now</span>
            </button>
          </div>
        </div>
        <div className="sm:pl-4 mt-4">
          <div>
            <h2
              className={
                theme === "light"
                  ? "sm:text-3xl text-5xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                  : "sm:text-3xl text-5xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white"
              }
            >
             
              
            </h2>
          </div>
          <img
            className="sm:h-[475px] h-[765px] w-full bg-no-repeat bg-center relative z-10 header rounded-xl"
            src={header1}
            alt="header-phone"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
