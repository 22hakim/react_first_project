import './App.css';
import Users from './components/Users';
import { SiAllocine } from "react-icons/si";

function App() {
  return (
    <div className="App">
      <Users name="test"/>
      <Users/>
      <h2> allons trouver un film sur <SiAllocine style={{ color: "orange" }}/></h2>
    </div>
  );
}

export default App;
