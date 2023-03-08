import { Form, redirect } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  await fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  });
  return redirect("/");
};

export function Register() {
  return (
    <div>
      <h1>Register</h1>
      <Form method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="image">Image URL:</label>
        <input type="text" name="image" />
        <button type="submit">Register</button>
      </Form>
    </div>
  );
}
