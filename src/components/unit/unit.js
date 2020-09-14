import React from 'react'
import datasheet from '../teams/datasheet'

const Unit = (props) => {

   const team = datasheet.team

   const filteredTeams = team.filter(item => item.name.includes(props.selectedTeam))
   const myUnits = filteredTeams[0].units
   console.log('chosen team', myUnits)

   return (
   <div>
      {myUnits.map(unit => (
         <div className="teamBlock"><h2>{unit.name} <span>Power rating: {unit.power}</span></h2></div>
      ))}
   </div>
   )
}
export default Unit;