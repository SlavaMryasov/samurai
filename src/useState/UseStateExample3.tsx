import { useState } from "react"


export const UseStateExample3 = () => {

    let [count, setCount] = useState(1)


    const changer = (state: number) => {
        return state + 1
    }

    const changerTimeout = () => {
        setTimeout(() => {
            setCount((state) => state + 1)
            //  setCount(count + 1) // здесь происходит замыкание на старом значении
        }, 5000)
    }

    return (
        <>

            {count}
            <button onClick={() => setCount(changer)}>+</button>
            <br />
            async____
            {count}
            <button onClick={changerTimeout}>+</button>
        </>
    )
}

