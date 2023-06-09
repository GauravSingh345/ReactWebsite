import React from 'react'
import { NavLink } from 'react-router-dom'
const Common = (props) => {
  return (
    <div>
      <section id='header' className='d-flex align-items-center justify-content-center mt-7'>
          <div className="container-fluidvnav bg">
            <div className="row">
              <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex  justify-content-center  flex-column">
                <h1>{props.name} <strong className='brand-name'>UniCloud It Services</strong></h1>
                <h2 className="my-3">
                  we are the team of talented developer making websites
                </h2>
                <div className="mt-3">
                  <NavLink to={props.visit} className='btn-get-started'>{props.btname} </NavLink>
                </div>
                </div>
               
                <div className="col-lg-6 order-1 order-lg-2 heder-img">
                   <img src={props.imgscr} className='img-fluid animated' id='animated' alt="home img" />
                </div>
             </div>
              </div>
           </div>
          </div>
  
      </section>
    </div>
  )
}

export default Common
