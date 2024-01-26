import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



const NavBar=()=> {
    const navigate = useNavigate()
    const SignOut = () => {
        localStorage.removeItem("token")
        navigate('/')
    }
  return (
    <Navbar className="bg-body-tertiary" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#">
            <div className='d-flex' style={{"gap":"1rem"}}>
                <div className='display-4 font-weight-bold'>Admin Panel</div>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Button variant="outline-dark" onClick={SignOut}>SignOut</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
