import { useEventContext } from "../EventContext";
import { useNavigate, useLoaderData } from "react-router-dom";

export const loader = async () => {
  const users = await fetch("http://localhost:3000/users");

  return { users: await users.json() };
};

export function Login() {
  const { users } = useLoaderData();
  const { login } = useEventContext();
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    login(users[e.target[0].selectedIndex]);
    navigate("/");
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        Select User
        <select>
          {users.map((user) => (
            <option key={user.id}>{user.name}</option>
          ))}
        </select>
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
}
