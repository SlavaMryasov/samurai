import { useEffect, useState } from "react"

export const UseEffectExample1 = () => {
    const [counter, setCounter] = useState(0)


    // useEffect(() => {
    //     console.log('зависимостей нет') // no addictions
    // })

    // useEffect(() => {
    //     console.log('пустой массив зависимостей') //empty dependency array
    // }, [])

    // useEffect(() => {
    //     console.log('зависит от counter') //depends on counter
    // }, [counter])



    // суть зачистки следующая, когда мы запустили какое то действие и оно не успело выполниться до
    // демонитирования, useEffect нужно зачистить от этого действия, что бы оно не ело ресурсы:

    // отмена асинхронных запросов, для fetch метод abort - "переменная.abort()",
    // для axios - метод cancel - "переменная.cancel()"

    // очистка интервалов и таймеров, методами clearInterval - "clearInterval(переменная)"

    // удаление обработчиков соботий - window.removeEventListener('resize', handleResize);


    // далее идем во второй пример, прочти комменты

    return (
        <>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    )
}

