import React from 'react';
import './participant.css';

export default function Participant(props) {
  const id = `participant-${props.id}`;
  
  //const inSessionIndicator = (props.inSession) ? <span className="in-session" /> : false;
  const inSessionIndicator = (props.inSession) ? <span className="dot1" /> : <span className="dot2" />;
  const inSessionTxt = (props.inSession) ? <h5>in Session</h5> : <h5>left Session</h5>;
  const onStage = (props.onStage) ? <h5>on Stage</h5> : inSessionTxt;
  

  // if ({props.inSession}) {<span className="dot1"></span>} 
  // if({props.onStage}) <h5>"onStage"</h5>
  // else  <h5>"in Session"</h5>
  // else  <span className="dot2"></span>

  return (
    <div id={id}>
      <h3>{props.name}</h3>
      <img src={props.avatar} height="10px" width="10px" border-radius="5px"/>
      {inSessionIndicator}
      {onStage}
      <button type='button'>boot</button>
    </div>
    );
}
    
// id= {participant.id}
// name= {participant.name}
// avatar= {participant.avatar}
// inSession= {participant.inSession}
// onStage= {participant.onStage}