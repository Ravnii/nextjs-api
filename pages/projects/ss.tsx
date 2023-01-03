import { useState } from 'react'
import players from '../../lib/players'

export default function SS() {
const [teamMembers, setTeamMembers] = useState(players)

  const headers = [
    'Navn',
    'Mål',
    'Skud',
    'Assists',
    'Fejl',
    '2 min',
    'Gult kort',
    'Scoringsprocent',
    'Frikast',
    'Straffe',
    'Brændt straffe',
  ]

  function increaseStats(teamMember, stat) {
    const newTeamMembers = [...teamMembers]
    const index = newTeamMembers.indexOf(teamMember)
    newTeamMembers[index][stat]++
    setTeamMembers(newTeamMembers)
  }

  return (
    <div className="container mx-auto pt-12">
      <table className="table-fixed w-full border-collapse border border-slate-400 break-words dark:text-white">
        <thead>
          <tr>
            {headers.map((header) => (
              <th className="border border-slate-300" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {teamMembers.map((teamMember, index) => (
              <tr key={index}>
                <td key={teamMember.name} className="border border-slate-300">{teamMember.name}</td>
                <td key="goals" className="border border-slate-300" onClick={() => increaseStats(teamMember, 'goals')}>{teamMember.goals}</td>
                <td key="shots" className="border border-slate-300" onClick={() => increaseStats(teamMember, 'shots')}>{teamMember.shots}</td>
                <td key="assists" className="border border-slate-300" onClick={() => increaseStats(teamMember, 'assists')}>{teamMember.assists}</td>
                <td key="errors" className="border border-slate-300" onClick={() => increaseStats(teamMember, 'errors')}>{teamMember.errors}</td>
                <td key="2 min" className="border border-slate-300" onClick={() => increaseStats(teamMember, 'twoMin')}>{teamMember.twoMin}</td>
                <td key="yellow card" className="border border-slate-300" onClick={() => increaseStats(teamMember, 'yellowCard')}>{teamMember.yellowCard}</td>
                <td key="scoring percentage" className="border border-slate-300" onClick={() => increaseStats(teamMember, 'scoringPercentage')}>{teamMember.scoringPercentage}</td>
                <td key="free throws" className="border border-slate-300" onClick={() => increaseStats(teamMember, 'freeThrows')}>{teamMember.freeThrows}</td>
                <td key="penalty" className="border border-slate-300" onClick={() => increaseStats(teamMember, 'penalty')}>{teamMember.penalty}</td>
                <td key="burned penalty" className="border border-slate-300" onClick={() => increaseStats(teamMember, 'burnedPenalty')}>{teamMember.burnedPenalty}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
