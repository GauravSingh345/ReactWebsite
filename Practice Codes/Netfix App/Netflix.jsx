   
   import React from "react";
   import Sdata from "./Sdata";
   import Cards from "./Cards";
   const Netflix=()=>{
       
     return(
                  <Cards
                    key={Sdata[2].id}
                    imgsrc={Sdata[2].imgsrc} 
                    title={Sdata[2].title}
                    sname ={Sdata[2].sname}
                    link={Sdata[2].link}
                  />
                  );
   }
  export default Netflix ;