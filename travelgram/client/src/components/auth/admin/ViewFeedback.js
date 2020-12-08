import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { authUser } from "../../../App";


function ViewFeedback() {
    const { id } = useParams();
    const [blog, setBlog] = useState({});



    useEffect(() => {
        authUser
          .get(`/admin/feedback/${id}`)
          .then((res) => {
            console.log(res.data.blog);
            setBlog(res.data.blog);
            // let onlyDate = blog.date.split('T')[0];
            // alert(onlyDate);
          })
          .catch((err) => console.log(err));
      }, []);
    return (
        <>
            

            <div className="row">
        <div className="container col-10">
          <div className="row">
            <div className="col-lg-2">
              <button className="btn btn-danger mt-3" onClick={()=>window.location='/adminpage'} >Go Back</button>
            </div>
            <div className="col-lg-10">
             
              <p className="lead my-4 my-auto">
               {blog.Body}
              </p>
        
            </div>
          </div>
        </div>
      </div>


        </>
    )
}

export default ViewFeedback
