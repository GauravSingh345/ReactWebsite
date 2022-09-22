import React from "react";
import Cards from './Cards';
import Sdata from "./Sdata";
import Netflix from "./Netflix";
import Amazon from "./Amazon";
const facSeries='Stranger Things';


const FavS=()=>{
  if(facSeries ==="netflix"){
    return <Netflix />
  }else{
        return <Amazon/>
  }
}


const App =  ()=>(
  <>
    
            <h1 className="heading_style">List Of top 5 Netflix Series</h1>
            {/* <FavS></FavS>*/}
      {(facSeries ==="Stranger ")? <Netflix /> :<Amazon/>}
 </>
);
 
 export default App;