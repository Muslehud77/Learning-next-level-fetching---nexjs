'use client'
import { useEffect, useState } from "react";


const Users = () => {

    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>setUsers(data))
    },[])
    

    return (
        <div>
            
        </div>
    );
};

export default Users;