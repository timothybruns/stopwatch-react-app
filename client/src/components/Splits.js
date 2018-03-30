import React from 'react';

const Splits = (props) => {
    // console.log(props)
    return (
        <div className="splits">
            <ul className="splits-list">
                {props.splits.map((split, i) =>
                    <li className="split-list-item" key={i}>
                    <strong>Lap {i++}</strong>
                    {props.formattedTime(split)}
                    </li>)
                }
            </ul>
        </div>
    )
} 


export default Splits;