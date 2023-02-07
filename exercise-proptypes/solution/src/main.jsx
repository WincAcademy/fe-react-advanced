import React from "react";
import ReactDOM from "react-dom/client";
import Person from "./Person";
import "./index.css";

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Person
      address={{
        street: "Zuckerberg Avenue",
        houseNumber: 1,
        city: "San Francisco",
      }}
      age={27}
      hobbies={["playing piano", "cooking", "knitting"]}
      name="Johnny"
      pronoun="His"
    />
    <br />
    <Person
      name="Clarissa"
      age={59}
      address={{ street: "Bezos Lane", houseNumber: 6, city: "Seattle" }}
      pronoun="Her"
      hobbies={["sky diving", "formula 1", "snowboarding"]}
    />
  </React.StrictMode>
);
