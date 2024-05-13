import { useState } from 'react';
import './App.css';
import { UseEffectExample1 } from './useEffect/UseEffectExample1';
import { WidthInfoComponent } from './useEffect/UseEffectExample2';
import { UseRefExample1 } from './useRef/UseRefExample1';
import { UseStateExample1 } from './useState/UseStateExample1';
import { UseStateExample2 } from './useState/UseStateExample2';
import { UseStateExample3 } from './useState/UseStateExample3';
import { UseRefExample2 } from './useRef/UseRefExample2';
import { UseRefExample3 } from './useRef/UseRefExample3';


function App() {

  const [visible, setVisible] = useState(true)
  return (
    <div className="App">
      {/* <UseStateExample1 /> */}
      {/* <UseStateExample2 /> */}
      {/* <UseStateExample3 /> */}
      {/* <UseEffectExample1 /> */}


      {/* <button onClick={() => setVisible(!visible)}>visible</button>
      {visible && <WidthInfoComponent />} */}

      {/* <UseRefExample1 /> */}
      {/* <UseRefExample2 /> */}
      <UseRefExample3 />
    </div>
  );
}

export default App;
