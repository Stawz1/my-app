import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
import coolImage from './154009.jpg'
import BracketEntry from './components/BracketEntry';

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="App">
      <div className="Navbar">
        <button className="MenuButton" onClick={(e) => setSidebar(!sidebar)}>
            Menu
        </button>
      </div>
      <SidebarOrNoSidebar isSidebar={sidebar}/>
      <div style={{display: 'flex', flex: '1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{width: '600px', display: 'flex', flexDirection: 'column'}}>
          <button class='CreateBracket' style={{display: 'flex', alignSelf: 'end'}}>Create bracket</button>
          <div style={{alignItems: 'center'}}>
            <BracketEntry />
            <BracketEntry />
            <BracketEntry />
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarOrNoSidebar(props) {
  if (props.isSidebar) {
    return <Sidebar />
  }
}

export default App;
