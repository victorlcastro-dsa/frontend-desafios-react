
import { Outlet } from 'react-router-dom';

import Background from './assets/background.jpg';

import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${Background})`}}>
      <div className="container">
          <Outlet />
      </div>
    </div>
  )
}

export default App
