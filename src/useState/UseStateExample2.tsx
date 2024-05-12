import { useEffect, useState } from "react"
import axios from "axios";

const initNumber = () => {
    // не обращать внимания как реализовано долгое выполнение, здесь может быть обработка больших массивов
    // или сложные мат операции
    console.log('init number')
    const startTime = Date.now()
    while (Date.now() - startTime < 2000) { }
    return new Date().getDate()
}

export const UseStateExample2 = () => {

    let [count, setCount] = useState(initNumber) // ленивая инициализация, делается 1 раз

    return (
        <>
            {count}
            <button onClick={() => setCount(state => state + 1)}>+</button>
        </>
    )
}

