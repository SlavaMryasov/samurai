import React from 'react';
export const UseRefComp = () => {
   const inputRef = React.useRef<HTMLInputElement>(null!);

   const focusInput = () => {
      console.log(inputRef.current.value);
      inputRef.current.focus();
   };

   const refCounter = React.useRef(0);

   function handleClick() {
      refCounter.current = refCounter.current + 1;
      alert('You clicked ' + refCounter.current + ' times!');
   }
   return (
      <div>
         <input ref={inputRef} type="text" />
         <button onClick={focusInput}>Focus on the input</button>
         <button onClick={handleClick}>Click me!</button>
         <div>{refCounter.current}</div>
      </div>
   );
};
