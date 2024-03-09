import React from "react";

const JustSwitch = () => {
  let bigNumber = BigInt(9007199254740991);
  switch (bigNumber) {
    case BigInt(9007199254740991):
      break;
    default:
      console.log("Your number is not that big.");
  }
  return <div></div>;
};

export default JustSwitch;
