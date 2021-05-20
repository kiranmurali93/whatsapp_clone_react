import './App.css';
import Sidebar from './Components/Sidebar'
import Chatsec from './Components/Chatsec'

function App() {
  return (
    <div className="App">
      <div className="app_body">
        <Sidebar/>
        <Chatsec />
      </div>
    </div>
  );
}

export default App;
