import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations,{lightSpeedInRight} from "@wellyshen/use-web-animations";

function App() {
  
  const { ref, playState ,getAnimation  } = useWebAnimations({...lightSpeedInRight});

  return (
    <div >
      <div ref={ref} className="animate">App</div>
      Current state: {playState}
      <button onClick={()=>getAnimation().pause()}>Pause</button>
      <button onClick={()=>getAnimation().play()}>Play</button>
    </div>
  );
}

export default App;
