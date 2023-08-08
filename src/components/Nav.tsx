import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header className="bg-gray-100 text-gray-500">
      <nav
        className="container mx-auto flex items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <NavLink className="text-black font-semibold text-lg" to="/">
          Job Hunter
        </NavLink>
        <ul className="flex space-x-5 sm:space-x-3 align-middle">
          <li>
            <a
              href="https://ca.indeed.com/jobs?q=front+end+developer&l=British+Columbia&fromage=1"
              className="hover:text-gray-800 hover:text-lg"
            >
              Indeed (BC)
            </a>
          </li>
          <li>
            <a
              href="https://ca.indeed.com/jobs?q=front+end+developer&fromage=1"
              className="hover:text-gray-800 hover:text-lg"
            >
              Indeed (CA)
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/jobs/"
              className="hover:text-gray-800 hover:text-lg"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <NavLink to="skills" className="hover:text-gray-800 hover:text-lg">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="notes" className="hover:text-gray-800 hover:text-lg">
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="postings"
              className="hover:text-gray-800 hover:text-lg"
            >
              Add New Posting
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
