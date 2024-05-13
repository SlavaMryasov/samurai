import { useEffect, useState } from 'react';

// ЭТОТ ПРИМЕР НЕ РАБОТАЕТ ПОТОМУ ЧТО AUTOFOCUS СРАБАТЫВАЕТ ТОЛЬКО ПРИ ПЕРВОМ РЕНДЕРЕ, 
//А НЕ ПРИ КАЖДОМ ОБНОВЛЕНИИ СОСТОЯНИЯ ИЗ ЗА ОГРАНИЧЕНИЙ БРАУЗЕРА
// можно было бы организовать перезагрузку страницы принудительную, и использовать локал стораге, но это бред
export const UseRefExample3 = () => {
    const [inputFocus1, setInputFocus1] = useState(false);
    const [but, setBut] = useState(false)

    useEffect(() => {
        console.log('useEffect')
        console.log(but)

        but && setInputFocus1(true)
        console.log(inputFocus1, 'inpFocus')
    }, [but])

    const butHandler = () => {
        setBut(!but)
        // setBut(false)
    }

    return (
        <>
            <input autoFocus={inputFocus1} />
            <button onClick={butHandler}>toggle autofocus1</button>
        </>
    );
};

