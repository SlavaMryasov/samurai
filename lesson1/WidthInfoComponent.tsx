import React from 'react';

export const WidthInfoComponent = () => {
   const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

   React.useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      console.log('ширина окна', windowWidth);

      return () => {
         console.log('вызвана функция очистки ширины окна', windowWidth);
         window.removeEventListener('resize', handleResize);
      };
   }, [windowWidth]);

   return (
      <div>
         <span>{windowWidth}</span>
      </div>
   );
};
