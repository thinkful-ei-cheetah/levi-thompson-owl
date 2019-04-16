import React from 'react';
import './participant.css';

export default function Participant(props) {
const divtag = `participant-${props.id}`;
  return (
    <div className={divtag}>
    <h3>{participant.name}</h3>
    <img src={props.avatar} height="10px" width="10px" border-radius="5px"/>
    if ({props.inSession}) <span className="dot1"></span> if({props.onStage}) <h5>"onStage"</h5>
        else  <h5>"in Session"</h5>
    else  <span className="dot2"></span>
    <button type='button'>boot</button>
    </div>
    );
    }
    
