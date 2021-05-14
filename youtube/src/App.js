import {Button,Navbar,Nav} from 'react-bootstrap'
import {Avatar} from '@material-ui/core'
import * as FaIcons from 'react-icons/fa'
import {useState} from 'react'
import Sidebar from './components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavRight from  './components/NavRight'
import './App.css';

function App() {
  const [isSidebar,setSidebar]=useState(false);
  const sideBartogglefunc=()=>{
    setSidebar(!isSidebar);
    console.log(isSidebar);
  }
  return (
    <div className="App">
        <Navbar className="navi" expand="lg">
          <div className="sideBarToggler" onClick={sideBartogglefunc}>
            <FaIcons.FaBars/>
          </div>
          <Navbar.Brand href="#" className="">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png"
                className="navbar_logo mr-auto"
                alt="Youtube">    
            </img>
          </Navbar.Brand>
          <div className="search_div ml-auto mr-auto">
            <input type="text" className="Search" placeholder="Search.." />
            <Button>Search</Button>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
              <NavRight/>
              <Nav className="nav_right ml-auto">
                <Avatar
                    className="postAvatar"
                    alt='icon'
                    src="https://sites.google.com/site/whoamibyismail/_/rsrc/1339777700514/y/siddhartha-malya/Sidhartha%20Mallya.jpg">
                </Avatar>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Sidebar isVisible={isSidebar}/>
        </div>
    </div>
  );
}

export default App;
