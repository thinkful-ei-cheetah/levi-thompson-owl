import React from 'react';
import Card from './Card'
import './List.css';


export default function Participants(props) {
  return (
    <section className='participant-list'>
      <div className='participants-div'>
        {props.map((participant) =>
          <Participant
            id= {participant.id}
            name= {participant.name}
            avatar= {participant.avatar}
            inSession= {participant.inSession}
            onStage= {participant.onStage}
          />
        )}
        </div>
    </section>
    )}
