import { useEffect, useState } from "react"


export const UseStateExample1 = () => {

    let [count, setCount] = useState(1) // после первого рендера инициализационное значение игнорируется

    useEffect(() => {
        // @ts-ignore
        window.count = count
    }, [count])

    //прямая мутация каунт, мы изменяем каунт и тутже его пересетываем
    const countHandlerPrefix = () => { // префиксный инкремент, сначала увеличиваем значение, потом возвращаем 
        setCount(++count)
    }
    const countHandlerPostfix = () => { // постфиксный инкремент, сначала возвращаем значение, потом увиличиваем
        setCount(count++)
    }


    // здесь каунт не каунт, а его значение. К этому новому значению с такимже названием прибавляется 1 и сетается
    const countHandlerStandart = () => {
        setCount(count + 1)
    }


    return (
        <>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={countHandlerStandart}>standart+1</button>
            <button onClick={countHandlerPrefix}>prefix+1</button>
            <button onClick={countHandlerPostfix}>postfix+1</button>
        </>
    )
}

