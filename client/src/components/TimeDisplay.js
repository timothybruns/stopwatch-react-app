import React from 'react';

const TimeDisplay = (props) => {
    // console.log(props)
        return (
          <div className="timeDisplay">
            <h1 className="stopwatch">{props.formattedTime}</h1>

            {(props.elapsed === 0 || props.incrementer === props.lastClearedIncrementer
                ? <button className="start-button" onClick={props.startTimer}>Start</button>
                : <button className="stop-button" onClick={props.stopTimer}>Stop</button>
            )}

            {(props.elapsed !== 0 && props.incrementer !== props.lastClearedIncrementer
                ? <button className="split-button" onClick={props.logTimeSplit} {...props.stopTimer}>Split</button>
                : null
            )}

            {(props.elapsed !==0 && props.incrementer !== props.lastClearedIncrementer
                ? <button className="reset-button" onClick={props.resetTimer}>Reset</button>
                : null
            )}
          </div>
        );
    } 


export default TimeDisplay;