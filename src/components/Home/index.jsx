import omgLogo from '../Assets/omgLogo.png';
import './style.css';

export default function Home() {
  return (
    <div className="logo">
      <img className="omgLogo" src={omgLogo} alt="omg" />
    </div>
  );
}
