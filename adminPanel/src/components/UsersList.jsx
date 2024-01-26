import React from 'react'
import { useEffect } from 'react'
import users from '../API/users.json'

const UsersList = () => {
  
  // useEffect(()=>{
  //   console.log(users[0].meta.CompanyName)
  // },[]);

  

  return (
    <div className=' w-75 col col-md-8 mx-auto mt-5'>
        <table className='w-100 table table-hover table-striped text-center'>
            <thead className='thead-light'>
                <tr >
                    <th scope='col'>Company Name</th>
                    <th scope='col'>GSTID</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Edit</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>

            <tbody>
                {users && users.map((user,idx) =>{
                    console.log(user);
                    return(
                        <tr key={idx} >
                            <td>{user.meta.CompanyName}</td>
                            <td>{user.meta.GSTID}</td>
                            {
                              user.meta.Status == 0?
                              <td className='text-danger'>Terminated</td>
                              :user.meta.Status == 1?
                              <td className='text-success'>Active</td>
                              :<td className='text-secondary'>Pending</td>
                            }
                            <td> <button className="btn btn-warning" >Edit</button></td>
                            <td> <button className="btn btn-danger" >Delete</button></td>
                            
                        </tr>
                    )
                })}
            </tbody>

        </table>
    </div>
  )
}

export default UsersList