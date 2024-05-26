// // import { useState } from 'react';
// // import './App.css';
// // import { UseEffectExample1 } from './useEffect/UseEffectExample1';
// // import { WidthInfoComponent } from './useEffect/UseEffectExample2';
// // import { UseRefExample1 } from './useRef/UseRefExample1';
// // import { UseStateExample1 } from './useState/UseStateExample1';
// // import { UseStateExample2 } from './useState/UseStateExample2';
// // import { UseStateExample3 } from './useState/UseStateExample3';
// // import { UseRefExample2 } from './useRef/UseRefExample2';
// // import { UseRefExample3 } from './useRef/UseRefExample3';
// // import Stopwatch from './useRef/Example';
// // import Countdown from './useRef/Example';

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react"

// import { memo, useMemo, useState } from "react";


// function App() {
//   console.log('app')
//   const [count, setCount] = useState(0);
//   const [x, setX] = useState(0)

//   // const memoizedValue = useMemo(() => {
//   //   console.log('Выполнение дорогостоящего вычисления...');
//   //   return count * 2;
//   // }, [count]);


//   const memoizedValue = useMemo(() => {
//     console.log('Выполнение дорогостоящего вычисления...');
//     let i = 0;
//     while (i < 900000000) i++;
//     return count * 2;
//   }, [x])

//   return (
//     <div className="App">

//       <button onClick={() => setCount(state => (state + 1))}>+</button>
//       {count}
//       <br />
//       {memoizedValue}
//       <br />
//       <button onClick={()=> setX(state=> state+1)}>+x</button>
//     </div>
//   );
// }

// export default App;


// export const Child = memo((props: { name: string }) => {
//   console.log('child')
//   return (
//     <>
//       {props.name}
//     </>
//   )
// })





//ЗАГОТОВКА memo //ЗАГОТОВКА memo //ЗАГОТОВКА memo //ЗАГОТОВКА memo //ЗАГОТОВКА memo
// // В этом примере обернуть в мемо чайлд 
// const App = () => {
//   console.log('app')
//   const [count, setCount] = useState(0)
//   return (
//     <>
//       {count}
//       <button onClick={() => setCount(state => state + 1)}>+</button>
//       <Child name='slava' />
//     </>
//   )
// }

// export default App


// const Child = (props: { name: string }) => {
//   console.log('child')
//   return (
//     <>
//       <div>{props.name}</div>
//       <div>aabracadabra</div>
//     </>
//   )
// }










// const App = () => {
//     console.log('app')
//     const [count, setCount] = useState(0)
//     return (
//         <>
//             {count}
//             <button onClick={() => setCount(state => state + 1)}>+</button>
//             <Child name='slava' age={12} />
//             <Child2 name='slava' age={12} />
//         </>
//     )
// }

// export default App


// const Child = memo((props: { name: string, age: number }) => {
//     console.log('child')
//     return (
//         <>
//             <div>{props.name}</div>
//             <div>aabracadabra</div>
//             <div>{props.age}</div>
//             <div> </div>
//         </>
//     )
// })
// const Child2 = memo((props: { name: string, age: number }) => {
//     console.log('child2')
//     return (
//         <>
//             <div>{props.name}</div>
//             <div>aabracadabra</div>
//             <div>{props.age}</div>
//             <div> </div>
//         </>
//     )
// })





























//ЗАГОТОВКА useCallback //ЗАГОТОВКА useCallback //ЗАГОТОВКА useCallback //ЗАГОТОВКА useCallback


// const App = () => {
//     console.log('app')
//     const [counter, setCounter] = useState(0)
//     const increase = useCallback(() => setCounter(state => state + 1), [])

//     return (
//         <>
//             <Counter value={counter} />
//             <Button onClick={increase}>increase</Button>
//         </>
//     )
// }

// export default App


// const Counter = (props: { value: number }) => {
//     console.log('Counter')
//     return (
//         <div>
//             {props.value}
//         </div>
//     )
// }

// const Button = memo((props: { onClick: () => void, children: string }) => {
//     console.log('button')
//     const { onClick, children } = props
//     return <button onClick={onClick}>{children}</button>
// })




// // useCallback - при ререндере вернется таже функция increase
// // на самом деле при перерендере increase будет пересоздаваться, но реакт будет отдавать старую функцию из за useCallback
// const App = () => {
//   console.log('app')
//   const [counter, setCounter] = useState(0)
//   const increase = useCallback(() => setCounter(state => state + 1), [])

//   // const refIncrease = useRef(increase)
//   // useEffect(() => {
//   //   if (refIncrease.current !== increase) {
//   //     console.log('increase изменилась')
//   //   }
//   // }, [increase])

//   return (
//     <>
//       <Counter value={counter} />
//       <Button onClick={increase}>increase</Button>
//     </>
//   )
// }

// export default App


// const Counter = (props: { value: number }) => {
//   console.log('Counter')
//   return (
//     <div>
//       {props.value}
//     </div>
//   )
// }
// // повторно вызовем компонент button лишь в том случае, если изменится функция onClick(increase)
// // у реакт мемо вторым аргументом неявно вызывается функция сравнения, где она стравнит старые пропсы с новыми 
// const Button = memo((props: { onClick: () => void, children: string }) => {
//   console.log('button')
//   const { onClick, children } = props
//   return <button onClick={onClick}>{children}</button>
// }
// )





// ЗАГОТОВКА useMemo // ЗАГОТОВКА useMemo // ЗАГОТОВКА useMemo // ЗАГОТОВКА useMemo // ЗАГОТОВКА useMemo 
//useMemo - для сохранения результата выполнения функции

// type UserType = {
//     id: number
//     name: string
//     visible: boolean
// }

// const users: UserType[] = [
//     { id: 1, name: 'sasha', visible: true },
//     { id: 2, name: 'igor', visible: false },
//     { id: 3, name: 'valera', visible: true },

// ]

// const App = () => {
//     const [s, setS] = useState(1)
//     return (
//         <>
//             <UsersList users={users} />
//             {s}
//             <button onClick={() => setS(state => state + 1)}></button>
//         </>
//     )
// }
// export default App;

// const UsersList = ({ users }: { users: UserType[] }) => {
//     console.log('UsersList')
//     const filteredUsers = useMemo(() => users.filter(user => user.visible), [users])
//     return (
//         <List users={filteredUsers} />
//     )
// }

// const List = memo(({ users }: { users: UserType[] }) => {
//     console.log('List')
//     return (
//         <>
//             {users.map(user => <div key={user.id}>{user.name}</div>)}
//         </>
//     )
// })





// type UserType = {
//   id: number
//   name: string
//   visible: boolean
// }

// const users: UserType[] = [
//   { id: 1, name: 'sasha', visible: true },
//   { id: 2, name: 'igor', visible: false },
//   { id: 3, name: 'valera', visible: true },

// ]

// const App = () => {
//   const [value, setValue] = useState(0)
//   return (
//     <>
//       {value}
//       <button onClick={() => setValue(state => state + 1)}>value+</button>
//       <UsersList users={users} />
//     </>
//   )
// }
// export default App;

// const UsersList = ({ users }: { users: UserType[] }) => {
//   console.log('usersList')
//   const filteredUsers = useMemo(() => users.filter(user => user.visible), [users])
//   return (
//     <List users={filteredUsers} />
//   )
// }

// const List = memo(({ users }: { users: UserType[] }) => {
//   console.log('List')
//   return (
//     <>
//       {users.map(user => <div key={user.id}>{user.name}</div>)}
//     </>
//   )
// })











// 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок
// 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок
// 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок
// 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок
// 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок
// 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок
// 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок
// 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок
// 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок 3 урок


// useState useState useState useState useState useState useState useState 
// useState useState useState useState useState useState useState useState 
// useState useState useState useState useState useState useState useState 

// Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка 

// const App = () => {
//     const [count, setCount] = useState(1)
//     return(
//         <>
//         <div>{count}</div>
//         <button onClick={()=> {}}>inc</button>
//         </>
//     )
// }

//рабочий код рабочий код рабочий код рабочий код рабочий код рабочий код 

// const App = () => {
//     const [count, setCount] = useState(1)

//     const setCountHandler = () => {
//         setCount(state => state + 1)
//     }

//     // //пример как не надо
//     // const setSomeCount = () => {
//     //     setCount(count + 1)
//     //     setCount(count + 1)
//     //     setCount(count + 1)
//     // }

//     //пример как надо
//     // const setSomeCount = () => {
//     //     setCount(state => state + 1)
//     //     setCount(state => state + 1)
//     //     setCount(state => state + 1)
//     // }
//     // console.log(count)
//     return (
//         <>
//             <div>{count}</div>
//             <button onClick={setCountHandler}>inc</button>
//             {/* <button onClick={setSomeCount}>count+3</button> */}
//         </>
//     )
// }
// export default App;




//useEffect useEffect useEffect useEffect useEffect useEffect useEffect useEffect 
//useEffect useEffect useEffect useEffect useEffect useEffect useEffect useEffect 
//useEffect useEffect useEffect useEffect useEffect useEffect useEffect useEffect 

// Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка 

// const App = () => {
//     const [data, setData] = useState('initial')
//     useEffect(() => {

//     })
//     return (
//         <>
//             {data}
//         </>
//     )
// }
// export default App;




//рабочий код рабочий код рабочий код рабочий код рабочий код рабочий код 

// const App = () => {
//     console.log('app')

//     const [data, setData] = useState('initial')
//     const [count, setCount] = useState(1)

//     useEffect(() => {
//         console.log('useEffect')
//         fetch('https://jsonplaceholder.typicode.com/users/10')
//             .then(response => response.json())
//             .then(user => setData(user.name))
//     }, [])

//     const setCountHandler = () => {
//         setCount(state => state + 1)
//     }
//     return (
//         <>
//             <div>{data}</div>
//             <div>{count}</div>
//             <button onClick={setCountHandler}>inc</button>
//         </>
//     )
// }

// export default App;





// memo memo memo memo memo memo memo memo memo memo memo memo memo memo memo  
// memo memo memo memo memo memo memo memo memo memo memo memo memo memo memo 
// memo memo memo memo memo memo memo memo memo memo memo memo memo memo memo 


// // Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка 

// const App = () => {
//     console.log('app')
//     const [state, setState] = useState(0)
//     return (
//         <>
//             <div>{state}</div>
//             <button>inc</button>
//             <Child />
//         </>
//     )
// }

// const Child =() => {
//     console.log('child')
//     return (
//         <>child</>
//     )
// }

// export default App;



// //рабочий код рабочий код рабочий код рабочий код рабочий код рабочий код 

// const App = () => {
//     console.log('app')
//     const [state, setState] = useState(0)
//     return (
//         <>
//             <div>{state}</div>
//             <button onClick={() => setState(state => state + 1)}>inc</button>
//             <Child />
//         </>
//     )
// }

// const Child = memo(() => {
//     console.log('child')
//     return (
//         <>child</>
//     )
// })

// export default App;





//useCallback useCallback useCallback useCallback useCallback useCallback useCallback useCallback 
//useCallback useCallback useCallback useCallback useCallback useCallback useCallback useCallback 
//useCallback useCallback useCallback useCallback useCallback useCallback useCallback useCallback 


// // Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка 

// const App = () => {
//     console.log('app')
//     const [count, setCount] = useState(0)

//     const setCountHandler = () => {
//         setCount(state => state + 1)
//     }
//     return (
//         <>
//             <div>{count}</div>
//             <Child setCount={setCountHandler} />
//         </>
//     )
// }


// const Child = ({ setCount }: { setCount: () => void }) => {
//     console.log('child')
//     return (
//         <>
//             <div>child</div>
//             <button onClick={setCount}>inc</button>
//         </>

//     )
// }

// export default App;



// //рабочий код рабочий код рабочий код рабочий код рабочий код рабочий код 

// const App = () => {
//     console.log('app')
//     const [count, setCount] = useState(0)

//     const setCountHandler = useCallback(() => {
//         setCount(state => state + 1)
//     }, [])
//     return (
//         <>
//             <div>{count}</div>
//             <Child setCount={setCountHandler} />
//         </>
//     )
// }


// const Child = memo(({ setCount }: { setCount: () => void }) => {
//     console.log('child')
//     return (
//         <>
//             <div>child</div>
//             <button onClick={setCount}>inc</button>
//         </>

//     )
// })

// export default App;




// useMemo useMemo useMemo useMemo useMemo useMemo useMemo useMemo useMemo useMemo 
// useMemo useMemo useMemo useMemo useMemo useMemo useMemo useMemo useMemo useMemo 
// useMemo useMemo useMemo useMemo useMemo useMemo useMemo useMemo useMemo useMemo 


// // Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка Заготовка 


// type UserType = {
//     id: number
//     name: string
//     visible: boolean
// }

// const users: UserType[] = [
//     { id: 1, name: 'sasha', visible: true },
//     { id: 2, name: 'igor', visible: false },
//     { id: 3, name: 'valera', visible: true },

// ]

// const App = () => {
//     const [value, setValue] = useState(0)
//     return (
//         <>
//             {value}
//             <button onClick={() => setValue(state => state + 1)}>value+</button>
//             <UsersList users={users} />
//         </>
//     )
// }
// export default App;

// const UsersList = ({ users }: { users: UserType[] }) => {
//     console.log('usersList')
//     const filteredUsers = users.filter(user => user.visible)
//     return (
//         <List users={filteredUsers} />
//     )
// }

// const List = ({ users }: { users: UserType[] }) => {
//     console.log('List')
//     return (
//         <>
//             {users.map(user => <div key={user.id}>{user.name}</div>)}
//         </>
//     )
// }




// //рабочий код рабочий код рабочий код рабочий код рабочий код рабочий код 

// type UserType = {
//     id: number
//     name: string
//     visible: boolean
// }

// const users: UserType[] = [
//     { id: 1, name: 'sasha', visible: true },
//     { id: 2, name: 'igor', visible: false },
//     { id: 3, name: 'valera', visible: true },

// ]

// const App = () => {
//     const [value, setValue] = useState(0)
//     return (
//         <>
//             {value}
//             <button onClick={() => setValue(state => state + 1)}>value+</button>
//             <UsersList users={users} />
//         </>
//     )
// }
// export default App;

// const UsersList = ({ users }: { users: UserType[] }) => {
//     console.log('usersList')
//     const filteredUsers = useMemo(() => users.filter(user => user.visible), [users])
//     return (
//         <List users={filteredUsers} />
//     )
// }

// const List = memo(({ users }: { users: UserType[] }) => {
//     console.log('List')
//     return (
//         <>
//             {users.map(user => <div key={user.id}>{user.name}</div>)}
//         </>
//     )
// })





// нужна переменная, которая не приводит к обновлению компонента
//когда нужно создать ссылку на элемент компонента


const App = () => {
    console.log('app render')
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const counterHandler = () => {
        setCounter(state => state + 1)
    }
    const counterHandler2 = () => {
        setCounter2(state => state + 1)
    }

    const refRerenderCounter = useRef(0)

    refRerenderCounter.current = refRerenderCounter.current + 1

    console.log(refRerenderCounter.current)
    return (
        <>
            {counter}
            <button onClick={counterHandler}>inc</button>
            {counter2}
            <button onClick={counterHandler2}>inc</button>
            <div>{refRerenderCounter.current}</div>
        </>
    )
}

export default App;