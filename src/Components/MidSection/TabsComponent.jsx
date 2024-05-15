import React, { useContext } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { tabsData } from "../../DataForPage/dummyData";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const TabsComponent = () => {
  const { theme } = useContext(ThemeBgContext);
  return (
    <div id="features">
      {/* <Tabs
        id="custom-animation"
        value="bedroom"
        className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center content-between w-full"
      >
        <div className="sm:w-full sm:pl-4 w-4/5 pl-24">
          <h1
            className={
              theme === "light"
                ? "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                : "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
            }
          >
            Features
          </h1>
          <p
            className={
              theme === "light"
                ? "sm:text-xl text-2xl  pb-4  font-normal font-inter no-underline align-start tracking-wide normal-case leading-none text-dark"
                : "sm:text-xl text-2xl  pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
            }
          >
           Enhance Your Training Standards with Qartelz Fintech Industrial Training Software. Trusted by EdTech Companies, Industrial Training Centers, and In-House Training Facilities of Financial Institutions, our platform is designed to skillfully train employees and students. Offering competitive modules in banking and finance technology, our training software harnesses the power of artificial intelligence to keep candidates updated on the latest industry developments, ensuring they stay ahead in the dynamic landscape of finance and technology.
          </p>

         
          <TabsBody
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
           
          </TabsBody>
        </div>
        <div>
          <TabsBody
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {tabsData.map(({ value, img }) => (
              <TabPanel key={value} value={value}>
                <img className="h-[650px]" src={img} alt="phone"></img>
              </TabPanel>
            ))}
          </TabsBody>
        </div>
      </Tabs> */}
    </div>
  );
};

export default TabsComponent;
