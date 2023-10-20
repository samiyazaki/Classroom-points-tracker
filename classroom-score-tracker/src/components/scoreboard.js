import React, { useState } from 'react';
import Team from './Team';

function Scoreboard() {
  const [teams, setTeams] = useState([]);
  const [teamId, setTeamId] = useState(0);

  const addTeam = () => {
    setTeams([...teams, { id: teamId, name: `Team ${teamId + 1}`, score: 0 }]);
    setTeamId(teamId + 1);
  };

  const updateTeam = (id, name, score) => {
    const updatedTeams = teams.map(team => 
      team.id === id ? { ...team, name, score } : team
    );
    setTeams(updatedTeams);
  };

  const deleteTeam = (id) => {
    const updatedTeams = teams.filter(team => team.id !== id);
    setTeams(updatedTeams);
  };

  return (
    <div className="scoreboard">
      {teams.map(team => (
        <Team 
          key={team.id} 
          team={team}
          onUpdateScore={updateTeam}
          onDelete={deleteTeam}
        />
      ))}
      <button onClick={addTeam}>Add Team</button>
    </div>
  );
}

export default Scoreboard;
