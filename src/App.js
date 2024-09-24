
import './App.css';
import MarksList from './components/MarksList';

function App() {
  return (
    <div className="App">
      <MarksList name="Lalitha" tel="22" hin="90" eng="95" math="95" sci="89" soc="98"></MarksList>
      <MarksList name="Lavanya" tel="95" hin="93" eng="95" math="98" sci="95" soc="98"></MarksList>
      <MarksList name="Mohan" tel="92" hin="90" eng="95" math="95" sci="92" soc="98"></MarksList>
    </div>
  );
}

export default App;
