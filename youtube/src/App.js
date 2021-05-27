import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Avatar} from '@material-ui/core'
import * as FaIcons from 'react-icons/fa'
import {useState} from 'react'
import Sidebar from './components/Sidebar'
import NavRight from  './components/NavRight'
import './App.css';
import Home from './pages/Home'

function App() {
  const [isSidebar,setSidebar]=useState(false);
  const sideBartogglefunc=()=>{
    setSidebar(!isSidebar);
    
  }
  return (
    <div className="App">
        <div className="navi" expand="lg">
          <div className="header_1">
          <div className="sideBarToggler" onClick={sideBartogglefunc}>
            <FaIcons.FaBars/>
          </div>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png"
                className="navbar_logo mr-auto"
                alt="Youtube">    
            </img>
          </div>
          <div className="search_div">
            <input type="text" className="Search" placeholder="Search.." />
            <Button>Search</Button>
          </div>
          <div className="user_nav_right">
            
              <NavRight />
                <Avatar
                    className="postAvatar"
                    alt='icon'
                    src="https://sites.google.com/site/whoamibyismail/_/rsrc/1339777700514/y/siddhartha-malya/Sidhartha%20Mallya.jpg">
                </Avatar>
            
          </div>
        </div>  
        <div className="buty">
          <Sidebar isVisible={isSidebar}/>
          <Home isVisible={isSidebar}/>
        </div>
    </div>
  );
}

export default App;
