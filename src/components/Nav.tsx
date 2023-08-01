import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="Navbar">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Job Hunter
        </NavLink>
        <div className="Navbar.Toggle" />
        <div className="Navbar.Collapse">
          <div className="Nav">
            <div className="Nav.Link">
              <a href="https://ca.indeed.com/jobs?q=front+end+developer&l=British+Columbia&fromage=1">
                Indeed (BC)
              </a>
            </div>
            <div className="Nav.Link">
              <a href="https://ca.indeed.com/jobs?q=front+end+developer&fromage=1">
                Indeed (CA)
              </a>
            </div>
            <div className="Nav.Link">
              <a href="https://www.linkedin.com/jobs/">LinkedIn</a>
            </div>
            <NavLink to="skills" className="nav-link">
              Skills
            </NavLink>
            <NavLink to="notes" className="nav-link">
              Notes
            </NavLink>
            <NavLink to="postings" className="nav-link">
              Add New Posting
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
