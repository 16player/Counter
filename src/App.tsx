import React, {useState} from 'react';
import './App.css';
import s from './App.module.css'
import Button from "./button/button";
import CountInput from "./CountInput/CountInput";
import Count from "./Count/Count";


function App() {

    const [count, setCount] = useState(0)

    const onClickCount = () => {
        setCount(count + 1)
    }

    const onClickReset = () => {
        setCount(0)
    }





    return (
        <div className={s.container}>
            <div className={s.counter1_main}>
                <div className={s.counter1_body1}>
                    <div className={s.counter1_child1}>
                        <CountInput
                        />
                    </div>
                    <div className={s.counter1_child2}>
                        <Button name={'SET'}/>
                    </div>
                </div>
            </div>
            <div className={s.counter2_main}>
                <div className={s.counter2_body2}>
                    <div className={s.counter2_child1}>
                        <Count
                            count={count}
                        />
                    </div>
                    <div className={s.counter2_child2}>
                        <Button
                            name={'INC'}
                            count={onClickCount}
                        />
                        <Button
                            name={'RESET'}
                            count={onClickReset}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
