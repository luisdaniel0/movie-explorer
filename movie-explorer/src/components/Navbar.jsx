import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbarItems">
        <li className="navItem">
          <button>Movies</button>
        </li>
        <li className="navItem">
          <button>Series</button>
        </li>
        <li className="navItem">
          <button>Originals</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
