import React from "react";
import Header from "./components/Header";
import Icon from "./components/Icon";
import Image from "./components/Image";
import Prize from "./components/Prize";
import Button from "./components/Button";

const App = () => {
  return (
    <div
      style={{
        border: "2px solid grey",
        padding: "20px",
        width: "30%",
        borderRadius: "8px",
      }}
    >
      <div style={{ display: "flex", gap: "70px" }}>
        <div>
          <Header />
        </div>
        <Icon />
      </div>
      <Image />
      <div style={{ display: "flex", gap: "170px" }}>
        <Prize />
        <Button />
      </div>
    </div>
  );
};
export default App;
