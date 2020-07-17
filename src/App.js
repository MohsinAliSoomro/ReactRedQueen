import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
  const { ref, animate,getAnimation } = useWebAnimations();

    function aliceChange(){
      animate({
        keyframes:[
          { transform: 'translate(0, 0) scale(.5)' },
          { transform: 'translate(0, 0) scale(2)' }   
        ],
        timing:{
          duration: 8000, 
          easing: 'ease-in-out', 
          fill: 'both'
          
        }
      })
    }
    function SmallAlice(){
      aliceChange();
     }
     
    
    const BigAlice = (e) =>{
      animate({
        keyframes:[
          {transform:'scale(0.1)'}
        ],
        timing:{
          duration:3000,
          iterations:1,
          playbackRate:1.5,
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
