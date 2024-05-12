import React from 'react';
import { WidthInfoComponent } from './WidthInfoComponent';
import { UseRefComp } from './UseRefComp';

export const MainComp2 = () => {
   //    const [count, setCount] = React.useState(() => {
   //       return Math.floor(Math.random() * 10);
   //    });

   const [visibleWidth, setVisibleWidth] = React.useState(false);

   const [count, setCount] = React.useState(0);
//    console.log('@@@@count ', count);
   const incrementCountHendler = () => {
      setCount((count) => count + 1);
   };

   React.useEffect(() => {
      console.log(`Вызвана функция useEffect со значением count = ${count}`);
      return () => {
         console.log(`Вызвана функция очистки со значением count = ${count}`);
      };
   }, [count]);

   const toggleVisibleWidth = () => {
      setVisibleWidth((visibleWidth) => !visibleWidth);
   };

   return (
      <div>
         <div>
            <h1>useState, useEffect, useRef</h1>
            <div style={{ color: 'red', fontSize: '30px' }}> {count} </div>
            <button onClick={incrementCountHendler}>Increment</button>
            <div>
               <button onClick={toggleVisibleWidth}>On/off</button>
            </div>
            {visibleWidth && <WidthInfoComponent />}
         </div>
         <div>
            <UseRefComp />
         </div>
      </div>
   );
};
