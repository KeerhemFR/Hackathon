import Home from './components/Home';
import Player from './components/Game/Player';
import Button from './components/Game/Button';
import Ennemy from './components/Game/Ennemy';
import './reset.css';
import './App.css';

function App() {
  return (
    <>
      <Home />
      <h1>Componante APP</h1>
      <div className="fightContain">
        <Player />
        <Ennemy />
      </div>
      <Button content="Play" />
      <Button content="Start" />
    </>
  );
}

export default App;
