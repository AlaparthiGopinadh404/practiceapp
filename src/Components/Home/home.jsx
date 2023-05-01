import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios" ;
import URL from '../../Utils/apis';

function Home() {
    const[projectdata,setprojectdata]=useState([])
    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then((res)=>res.json())
        // .then(json=>setproject(json))
        getprojectdetails()
    },[])

   const getprojectdetails = () =>{
    console.log("url",URL.getproject)
     axios.get(URL.getproject)
     .then((res)=>{
        console.log("res",res?.data.data)
        setprojectdata("res",res?.data?.data)
     })
     .catch((err)=>{
        console.log(err)
     })
     console.log(projectdata)
   }
  return (
    <div>
        
        <table className='table table-responsive table-striped'>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>ProjectName</th>
                    <th>ProjectManger</th>
                </tr>
            </thead>
            <tbody>
                {
                    projectdata && projectdata.map((a)=>{
                        return <tr key={a?.PROJECT_ID}>
                            
                            <td>{a?.PROJECT_NAME}</td>
                            <td>{a?.PROJECT_MANAGER}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home;