import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>We are one call away </p>

      <div>
        <aside>
          <h2>Contact Us</h2>
          <nav>
            <ul>
              <li>
                <Link to="support">Support</Link>
              </li>
              <li>
                <Link to="career">Careers</Link>
              </li>
            </ul>
          </nav>
        </aside>

        <Outlet />
      </div>
    </div>
  );
};

export default Contact;
