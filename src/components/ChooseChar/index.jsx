import { Link } from 'react-router-dom';
import Button from '../Game/Button';

export default function Choosechar() {
  return (
    <>
      <Link to="/Game">
        <Button content="Play" />
      </Link>
      <Link to="/">
        <Button content="Return" />
      </Link>
    </>
  );
}
