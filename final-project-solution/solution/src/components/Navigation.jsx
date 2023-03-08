import { Link, useNavigate } from "react-router-dom";
import { useEventContext } from "../EventContext";

export const Navigation = () => {
  const { logout, selectedUser } = useEventContext();
  const navigate = useNavigate();
  const logoutUser = () => {
    navigate("/login");
    logout();
  };
  return (
    <nav>
      Welcome {selectedUser?.name}!
      <ul>
        <li>
          <Link to="/">Events</Link>
        </li>
        <li>
          <Link to="/my-events">My Events</Link>
        </li>
        <li>
          <Link to="/create">Create Event</Link>
        </li>
        <li>
          <a onClick={logoutUser}>Logout</a>
        </li>
      </ul>
    </nav>
  );
};
