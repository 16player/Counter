import React, {useState} from 'react';
import s from './CountInput.module.css'



function CountInput() {



    return (
        <>
            <div>
                max value:
                <input
                type={'number'}
                className={s.input}
            />
            </div>
            <div>
                start value:
                <input
                    type={"number"}
                    className={s.input}
                />
            </div>
        </>
    )
}

export default CountInput;
