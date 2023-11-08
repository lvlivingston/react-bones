import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/movies">Movie Page</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actor</Link>
    </nav>
  );
}
