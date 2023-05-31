import { createMuiTheme } from "@material-ui/core";
import React from "react";
import "./Footer.css";

const Footer = ({ LightTheme }) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: LightTheme ? "#000" : "#fff"
      },
      type: LightTheme ? "light" : "dark"
    }
  });

  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
    </div>
  );
};

export default Footer;
