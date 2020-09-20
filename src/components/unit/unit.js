import React, {useState} from "react";
import datasheet from "../teams/datasheet";

const Unit = (props) => {
  const team = datasheet.team;

  const filteredTeams = team.filter((item) =>
    item.name.includes(props.selectedTeam)
  );

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const [search, setSearch] = useState('')

  const myUnits = filteredTeams[0].units;

  const addToArmy = (e) => {
    let armyList = document.querySelector(".armyList");
    let copyItem = e.target.parentNode.parentNode;
    let clone = copyItem.cloneNode(true);
    armyList.append(clone);
  };

  if (props.selectedTeam !== "" && myUnits.length > 0) {
    return (
      <div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Search
            </span>
          </div>
          <input
            onChange={updateSearch}
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        {myUnits.filter(name => name.name.includes(search)).map((unit) => (
          <div key={unit.id}>
            <div className="teamBlock">
              <div onClick={addToArmy} className="addToArmy">
                +
              </div>
              <h2>
                {unit.name} <span>Power rating: {unit.power}</span>
              </h2>
            </div>
            <div className="table-responsive-sm">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Num</th>
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
                    <th scope="col">{unit.No}</th>
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
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <p>There are currently no units listed for this team</p>
      </div>
    );
  }
};
export default Unit;
