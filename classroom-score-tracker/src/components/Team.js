import React from 'react';

function Team({ team, onUpdateScore, onDelete }) {
  return (
    <div className="team">
      <input 
        type="text"
        value={team.name}
        onChange={(e) => onUpdateScore(team.id, e.target.value, team.score)}
      />
      <span>{team.score}</span>
      <button onClick={() => onUpdateScore(team.id, team.name, team.score + 1)}>+</button>
      <button onClick={() => onUpdateScore(team.id, team.name, team.score - 1)}>-</button>
      <button onClick={() => onDelete(team.id)}>Delete</button>
    </div>
  );
}

export default Team;
