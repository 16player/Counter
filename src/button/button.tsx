import React from 'react';
import s from './Button.module.css'

export type ButtonType = {
    name: string
    count: ()=>void
}



function Button(props: ButtonType) {
    return (
        <div>
            <button className={s.button} onClick={props.count}>{props.name}</button>
        </div>
    )
}

export default Button;
