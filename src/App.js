import React, {useState} from "react";
import Modal from "./Modal/Modal";
import './index.css'



function App() {
    let [count, setCount] = React.useState(0);

    const onClickPlus = () => {
        setCount(count + 1)
    }

    const onClickMinus = () => {
        setCount(count - 1)
    }

    const onClickReset = () => {
        setCount(count = 0 )
    }
    return (
        <div className={'App'}>
            <div className={'result'}>
                <h2>Плюсователь</h2>
                <h1>{count}</h1>
                <div>
                    <button  onClick={onClickMinus} className={'minus'}>- Уменьшить</button>
                    <button onClick={onClickPlus} className={'plus'}>Добавить +</button>
                </div>
                <button onClick={onClickReset} className={'reset'}>Сброс</button>
                <Modal count={count}/>
            </div>
        </div>

    )
}

export default App;
