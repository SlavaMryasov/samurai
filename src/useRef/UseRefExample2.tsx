import { useRef, useState } from "react"


// по дефолту в useRef передаем null, т.к. DOM еще не отрисовался и ссылаться не на что

export const UseRefExample2 = () => {

    const [inpValue, setInputValue] = useState('')

    const ref = useRef<HTMLInputElement>(null)

    const setInputValueHandler = () => {
        const myInputValue = ref.current as HTMLInputElement //  даже если null воспринимай как HTMLInputElement
        setInputValue(myInputValue.value)
    }
    return (
        <>
            <h3>_{inpValue}</h3>
            <input ref={ref} />
            <button onClick={setInputValueHandler}>show input value</button>
        </>
    )
}

// сказать что через querySelector нельзя искать инпут, затрат ресурсов на поиск
// надо этих рефов избегать. В реакт все должно контролироваться
// этот пример ознакомительный, типа так можно, но не надо

//ответ на вопрос про фокус
// да, можно фокус задать без useRef, но  нужно использовать useEffect и useState (Example3)