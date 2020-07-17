import React, { useEffect } from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
  const { ref, animate } = useWebAnimations();

  
    const SmallAlice = (e) =>{
      animate({
        keyframes:[
          {transform:'scale(1.1)'},
          {transform:'scale(1.2)'},
          {transform:'scale(1.4)'},
        ],
        timing:{
          duration:3000
        }
      })
     }
     const BigAlice = (e) =>{
      animate({
        keyframes:[
          {transform:'scale(1)'},
          {transform:'scale(0)'}
        ],
        timing:{
          duration:3000
        }
      })
     }
    

  return (
    <div>
      <div ref={ref} className="alice">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/alice-hungry_colors.png" alt="alice"/>
      </div>
      <div className="cake">
        <button className="btn" onClick={SmallAlice}>
        <img src="https://2.bp.blogspot.com/-DjkZ8Og2Dck/Wj-6GFUuKDI/AAAAAAAP_FA/Y7UA2P75KOQArofFYAQhq3hLWcAxKqoQACLcBGAs/s1600/TW694690.png" alt="cake" />
        </button>
      </div>
      <div className="bottle">
        <button className="btn" onClick={BigAlice}>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/drink-me_fg_small.png" alt="setter"/>
        </button>
        </div>
    </div>
  );
}

export default App;
