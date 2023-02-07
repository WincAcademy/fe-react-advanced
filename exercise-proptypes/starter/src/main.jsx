import React from "react";
import ReactDOM from "react-dom/client";
import Person from "./Person";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Person
      name="Johnny"
      age={27}
      address={{
        street: "Zuckerberg Avenue",
        houseNumber: 1,
        city: "San Francisco",
      }}
      hobbies={["play piano", "cook", "play basketball"]}
      pronoun="He"
    />
  </React.StrictMode>
);
