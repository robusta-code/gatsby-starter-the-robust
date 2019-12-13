import React from "react";
import github from "../../images/github.png";
import logo from "../../images/logo-bw.png";
import gatsby from "../../images/gatsby.png";
import { FlexWrapProperty } from "csstype";

export default function BottomSection() {
  const flex = {
    display: "flex",
    flexWrap: "wrap" as FlexWrapProperty,
    justifyContent: "space-between",
    marginTop: "40px"
  };

  const flexCenter = {
    ...flex,
    justifyContent: "center"
  };

  return (
    <footer>
      <div style={flexCenter}>
        <img src={gatsby} alt={"Gatsby CMS"} />
        <div style={{ margin: "14px" }}>
          Made thanks to the{" "}
          <a href="https://github.com/robusta-code/gatsby-the-robust">
            Gatsby the Robust
          </a>{" "}
          starter kit
        </div>
      </div>
      <div style={flex}>
        <a href="https://www.robusta.io">
          <img src={logo} alt="Robusta Code" className="center-block" />
        </a>

        <div>
          <a
            href="https://github.com/nicolas-zozol/"
            title="Github Nicolas Zozol"
          >
            Github :{" "}
            <img src={github} alt="Github Open Source by Nicolas Zozol" />
          </a>
        </div>
      </div>
    </footer>
  );
}
