import React from 'react';
import s from './Count.module.css'

type CountType = {
    count: number
}

function Count(props:CountType) {



    return (
        <>
           <div>{props.count}</div>
        </>
    )
}

export default Count;
