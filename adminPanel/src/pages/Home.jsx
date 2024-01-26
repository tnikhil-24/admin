import React from 'react'
import NavBar from '../components/NavBar'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddUser from './AddUser';
import UsersList from '../components/UsersList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const addCompany = () =>{
        navigate('/add-user')
        console.log("Add company implementation required")
    }
  return (
    <div className='container-fluid'>
        <NavBar/>
        <div className='mx-5 px-5 mt-4 fs-3'>
            Companies <AddCircleIcon onClick={addCompany} style={{"cursor":"pointer"}}/>
        </div>
        <UsersList/>
    </div>
  )
}

export default Home