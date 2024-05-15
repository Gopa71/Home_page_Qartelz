import React, { useContext } from "react";
import flowLight from "../../assets/images/img5.jpg";
import flowDark from "../../assets/images/img5.jpg";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
const FurnitureFlow = () => {
  const { theme } = useContext(ThemeBgContext);
  return (
    <div>
      {/* <img
        className="sm:hidden bg-center bg-no-repeat bg-cover h-full w-full"
        src={theme === "light" ? flowLight : flowDark}
        alt="furniture flow"
      ></img> */}
    </div>
  );
};

export default FurnitureFlow;
