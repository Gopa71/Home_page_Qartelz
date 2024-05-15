import React from "react";
import MidComponentItem from "./MidComponentItem";
import MidPhone1 from "../../assets/images/MidComponentPhone.png";
import MidPhone2 from "../../assets/images/midPhone2.png";

const MidComponentParent = () => {
  return (
    <div>
      <div>
        <MidComponentItem
          title="Dive into the Future"
          text="Unified Solution for Enhanced Efficiency Qartelz Financial Analysis Software streamlines complex financial decision-making processes. Our versatile Fintech solutions cater to diverse sectors including banking , Credit rating, investment advisory, wealth management, cooperative finance, investment banking, share valuation, and more facilitating seamless operations across the financial landscape."
          img={MidPhone1}
          reverse
        ></MidComponentItem>
      </div>
    </div>
  );
};

export default MidComponentParent;
