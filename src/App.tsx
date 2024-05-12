import './App.css';
import { UseEffectExample1 } from './useEffect/UseEffectExample1';
import { WidthInfoComponent } from './useEffect/UseEffectExample2';
import { UseRefExample1 } from './useRef/UseRefExample1';
import { UseStateExample1 } from './useState/UseStateExample1';
import { UseStateExample2 } from './useState/UseStateExample2';
import { UseStateExample3 } from './useState/UseStateExample3';


function App() {
  return (
    <div className="App">
      {/* <UseStateExample1 /> */}
      {/* <UseStateExample2 /> */}
      {/* <UseStateExample3 /> */}
      {/* <UseEffectExample1 /> */}
      <WidthInfoComponent />
      {/* <UseRefExample1 /> */}
    </div>
  );
}

export default App;
