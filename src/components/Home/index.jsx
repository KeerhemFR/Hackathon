import { Link } from 'react-router-dom';
import logoBackground from '../Assets/logoBackground.png';
import omgLogo from '../Assets/omgLogo.png';
import Button from '../Game/Button';
import './style.css';

export default function Home() {
  return (
    <>
      <div className="logo">
        <img className="omgLogo" src={omgLogo} alt="omg" />
        <img className="logoType" src={logoBackground} alt="logotype" />
      </div>
      <Link to="/ChooseChar">
        <Button content="Start" />
      </Link>
      <Button content="Scores" />
    </>
  );
}
