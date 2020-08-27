import React from 'react';
import './cart.css'
const Cart = (props) => {
    let courses = props.enrollCourse;
     
   let totalPrice=courses.reduce(function (accumulator, course) {
    return accumulator + course.price;
  }, 0);;
    return (
        
            <div className="card" style ={{ backgroundColor: "#F3F8FE"}} >
                <h5 className="card-title title">Your Course</h5>
                <h6 className="card-subtitle mb-2 text-muted">Total Course   {courses.length}</h6>
                <ul className="list-group list-group-flush">
                <li className="list-group-item"><pre style={{fontWeight:"bold",fontSize:"16px"}}> Course Name         Price</pre></li>
                    {
                        courses.map(course=>
                             
                        <li className="list-group-item"><pre> {course.shortName}                {course.price}</pre></li>
                            )
                    }
                    <li className="list-group-item" style = {{backgroundColor: "#F3F8FE"}}><pre style={{fontWeight:"bold",fontSize:"16px"}}> Total               {totalPrice}</pre></li>
                     
                </ul>
            </div>
       
    );
};

export default Cart;