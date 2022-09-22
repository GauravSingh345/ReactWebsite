import React from "react";
import Heading from "./Heading"
function Cards(props){
    return(
      <>
      <div className="cards">
        <div className="card">
         <img src={props.imgsrc} alt="myPic" className="card__img"/>
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.sname}</h3>
            <Heading sname = {props.sname}/>
            <a href={props.link} target="_black">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
      </>
    )
  }

  export default Cards;