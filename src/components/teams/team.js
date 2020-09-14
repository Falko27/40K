import React, {useState, useEffect} from 'react';
import datasheet from './datasheet'
import Unit from '../unit/unit'

const data = datasheet.team

let team = true;
let getUnit = false;

const Team = () => {
const [selectedTeam, updateTeam] = useState('')


useEffect(() => {
getUnit = data.filter(teams => teams.name === selectedTeam)
if (selectedTeam) {
console.log(getUnit[0].units)
}
    
}, [selectedTeam])

const handleChange = (e) => {
    updateTeam(e.target.value)       
}

  return (
    <div className="App">
     <label>Select a team</label>
     <select value="select a team" onChange={handleChange} className="form-control">
    <option value="">Select a team...</option>
    {data.map(item => <option value={item.name} key={item.id}>{item.name}</option>)}
     </select>
     {team && (
         <div className="teamBlock col-md-12"><p>You have selected: {selectedTeam}</p></div>
     )}   
     <Unit selectedTeam={selectedTeam} />  
    </div>
  );
}

export default Team;