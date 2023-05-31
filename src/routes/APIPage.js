import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Container, Switch, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { useEffect, useState } from "react";

function APIPage() {
  return (
    <div className="APIPage">
      <div className="contents">
        <h1>
          This project was made possible thanks to the freeDictionaryAPI created
          by meetDeveloper
        </h1>
      </div>
      <div className="button">
        <form action="https://dictionaryapi.dev/" target="_blank">
          <button className="button button1">API Link</button>
        </form>
      </div>
    </div>
  );
}

export default APIPage;
