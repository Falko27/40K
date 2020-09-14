import React from "react";
import datasheet from "../teams/datasheet";

const Unit = (props) => {
  const team = datasheet.team;

  const filteredTeams = team.filter((item) =>
    item.name.includes(props.selectedTeam)
  );
  const myUnits = filteredTeams[0].units;
  console.log("chosen team", myUnits);

  return (
    <div>
      {myUnits.map((unit) => (
        <>
          <div className="teamBlock">
            <h2>
              {unit.name} <span>Power rating: {unit.power}</span>
            </h2>
          </div>
          <div class="table-responsive-sm">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">M</th>
                  <th scope="col">WS</th>
                  <th scope="col">BS</th>
                  <th scope="col">S</th>
                  <th scope="col">T</th>
                  <th scope="col">W</th>
                  <th scope="col">A</th>
                  <th scope="col">Ld</th>
                  <th scope="col">Sv</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col">{unit.M}"</th>
                  <th scope="col">{unit.WS}+</th>
                  <th scope="col">{unit.BS}+</th>
                  <th scope="col">{unit.S}</th>
                  <th scope="col">{unit.T}</th>
                  <th scope="col">{unit.W}</th>
                  <th scope="col">{unit.A}</th>
                  <th scope="col">{unit.Ld}</th>
                  <th scope="col">{unit.Sv}+</th>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ))}
    </div>
  );
};
export default Unit;
