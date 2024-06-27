import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AtithiList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/atithis');
        setUsers(response.data); // Assuming response.data is an array of user objects
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  return (
    
<>

<div>
  <h1 className=' bg-black p-4 text-white'>Atithi List</h1>
</div>

      {/* <table>
        <tbody>
          {users.map((user) => (
            user.fullName !== "Not required" ? (
            <div className=' grid grid-cols-3' style={{borderBottom: "20px solid gray"}}>
            

            <tr>
            <td><strong>Name:</strong></td>
            <td>{user.name}</td>
            <td><strong>Email:</strong></td>
            <td>{user.email}</td>
            </tr>
            <tr>
    <td><strong>Phone Number:</strong> {user.mobileNo}</td>
    </tr>
    <tr>
        <td><strong>State:</strong></td>
        <td>{user.state}</td>
        <td><strong>City:</strong></td>
        <td>{user.city}</td>
        </tr>
        <tr>
        <td><strong>Postal Pin Code:</strong></td>
        <td>{user.pincode}</td>
        </tr>
        <tr>
        <td><strong>Business Category:</strong></td>
        <td>{user.businessCategory}</td>
        </tr>
        
        <tr>
        <td><strong>User Photo:</strong></td>
        <td><img class=" w-40" src={user.userPhoto} alt="" /></td>
        </tr>
        
        </div>
        ):""))}
        </tbody>
        </table> */}
    
        </>
  )
}

export default AtithiList