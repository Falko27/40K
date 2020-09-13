import React, {useState, useEffect} from 'react';
import datasheet from './datasheet'
import Unit from '../teams/index'

const data = datasheet.team

let team = true;
let getUnit = false;

const Team = () => {
const [selectedTeam, updateTeam] = useState('')
//const [units, setUnits] = useState('')


useEffect(() => {
getUnit = data.filter(teams => teams.name === selectedTeam)
if (selectedTeam) {
//setUnits(getUnit[0].units)
console.log(getUnit[0].units)
}
    
}, [selectedTeam])

const handleChange = (e) => {
    updateTeam(e.target.value)       
}

  return (
    <div className="App">
   <Unit /> 
     <label>Select a team</label>
     <select value="select a team" onChange={handleChange} className="form-control">
    <option value="">Select a team...</option>
    {data.map(item => <option value={item.name} key={item.id}>{item.name}</option>)}
     </select>
     {team && (
         <div className="teamBlock col-md-12"><p>You have selected: {selectedTeam}</p></div>
     )}   
     {/* {getUnit ?  
        <div>{units.map(item => <div>{item.name}</div>)}</div> : <div>Nope</div>
     } */}

     

    </div>
  );
}

export default Team;