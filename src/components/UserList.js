import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
  const [userList   , setUserList] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>
    {
    setUserList(res.data);
    })
  },[]);

  return (
      <>
           <div style={{height:'700px',width:"100%",backgroundColor:"beige",textAlign:"center",border:"2px black solid",marginTop:"200px"}}>
            <h3 className="mb-5">Users Data</h3>
      {userList.map((item)=>
                
                <div  className="row justify-content-center"  key={item.id}>
                    <div style={{border:"1px solid gray"}} className="col-1">{item.name}</div>
                    <div  style={{border:"1px solid gray"}}className="col-2">{item.username}</div>
                    <div style={{border:"1px solid gray"}} className="col-2">{item.email}</div>
                    <div style={{border:"1px solid gray"}} className="col-2">{item.phone}</div>
                    <div style={{border:"1px solid gray"}} className="col-2">{item.website}</div>
                    <div  style={{border:"1px solid gray"}} className="col-2">
                        {item.address.street}, {item.address.suite} , {item.address.city}, {item.address.zipcode}     
                    </div>
                </div>
            )}
        </div>
       </>
  )
 
}

export default User;