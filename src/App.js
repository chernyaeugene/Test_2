import React, {useState} from "react";
import Modal from "./Modal/Modal";


function App() {
    let [count, setCount] = React.useState(0)

    function onClickPlus() {
        setCount(count + 1);
    }

    function onClickMin() {
        setCount(count - 1);
    }
    function onClickRes() {
        setCount(count = 0);
    }

    return (
        <div className={'App'}>
            <div>
                <h2>Плюсователь</h2>
                <h1>{count}</h1>
                <div>
                    <button onClick={onClickMin} className={'minus'}>- Уменьшить</button>
                    <button onClick={onClickPlus} className={'plus'}>Добавить +</button>
                </div>
                <button onClick={onClickRes} className={'reset'}>Сброс</button>
                <Modal></Modal>
            </div>

        </div>
    )
}

export default App;
