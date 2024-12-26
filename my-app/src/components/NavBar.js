import './NavBar.css';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <div id="nav-bar">
      {/* <a className="nav-link" href="/#about">About</a> */}
      <a className="nav-link" href="/#work">Products</a>
      <a className="nav-link" href="/#fun">Contact</a>
      {/* <a className="nav-link" href="#resume">Resume</a> */}
    </div>
  );
}
