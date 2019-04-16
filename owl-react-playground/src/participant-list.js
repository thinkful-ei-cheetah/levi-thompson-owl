import React from 'react';
import Participant from './participant.js';

export default function ParticipantList(props) {
  return (
    <section className='participant-list'>
      <div className='participants-div'>
        {props.participants.map((participant) =>
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
