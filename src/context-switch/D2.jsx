import { useContext } from "react";
import { aContext } from "./A2";

const D2 = () => {
  const aData = useContext(aContext);

  return (
    <div style={{ backgroundColor: aData.backgroundColor }}>
      <h1>
        I am D: {aData.counter}: {aData.backgroundColor}
      </h1>
    </div>
  );
};

export default D2;
