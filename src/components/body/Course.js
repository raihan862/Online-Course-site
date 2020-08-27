import React, { useState } from 'react';
import courses from '../../Data/data'
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Course = () => {

    const btnStyle = {
        position: "absolute",
        right: "10px",
        bottom: "30px",
        padding: "10px 15px",
        borderRadius: "15px",
        cursor: "pointer"

    }

    let [enrollCourse,setEnrollCourse]=useState([]);

    const btnHandler=(item)=>{
        let newItem=[...enrollCourse,item];
        setEnrollCourse(newItem);

    }
 
    return (
        <div style={{ marginTop: "10px" }}>
            <div className="row" >
                <div className="col-lg-8"  >
                    {
                        courses.map(data =>

                            <div className="card mb-3" style={{ maxWidth: "540px;" }}>
                                <div className="row no-gutters" style={{ backgroundColor: "#F3F8FE", padding: "15px" }}>
                                    <div className="col-md-4">
                                        <img src={data.picture} className="card-img " alt="..." height="90%" style={{ padding: "20px" }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body" style={{ Color: "#333" }} >
                                            <h3 className="card-title" style={{ fontWeight: "bold" }}>{data.name}</h3>
                                            <p className="card-text">Instructor  : <span className="font-weight-bold"> {data.instructor}</span>  </p>

                                            <p className="card-text">Rating  : <span className="font-weight-bold"> {data.rating}</span></p>
                                            <h5 className="card-text text-danger" >Price  :  <span className="font-weight-bold"> {data.price}</span></h5>
                                            <button className="btn-primary " style={btnStyle} onClick ={ ()=>btnHandler(data) }><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        )




                    }
                </div>
                <div className="col-lg-4" >
                        <Cart enrollCourse={enrollCourse}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Course;