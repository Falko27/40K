import React from "react";
import Team from "./components/teams/team";
import Army from "./components/army/army";

function App() {
  return (
    <div className="container App">
      <h1>Warhammer 40K</h1>
      <div className="row">
        <div className="col-md-6">
          <Team />
        </div>
        <div className="col-md-6">
          <Army />
        </div>
      </div>
    </div>
  );
}

export default App;
