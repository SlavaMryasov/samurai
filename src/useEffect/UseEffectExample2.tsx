import { useState } from "react";
import { useEffect } from "react";

export const WidthInfoComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            console.log('ширина окна изменилась:', window.innerWidth);
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            console.log('вызвана функция очистки ширины окна', windowWidth);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <span>{windowWidth}</span>
        </div>
    );
};

//мы должны вызывать очистку только при размонтировании компоненты, а сейчас она вызывается постоянно,
// так незя делать.
// Я удалил зависимость из массива, теперь функция зачистки сработает один раз

// несмотря на то, что useEffect сработает 1 раз, handleResize будет срабатывать постоянно
// потому что resize привязывается к window, который ссылается на handleResize

//еще проще, у браузера есть ссылка на функцию handleResize и он ее юзает

// еще надо как то показать теперь, что функция зачистки вызывается, как то надо в режиме онлайн
// убить компоненту хз как