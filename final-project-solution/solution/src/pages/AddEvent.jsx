import { Form, redirect } from "react-router-dom";
import { useEventContext } from "../EventContext";

export const action = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  formData.categoryIds = [];
  formData.attendedBy = [];
  formData.createdBy = Number(formData.createdBy);

  const id = await fetch("http://localhost:3000/events", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((event) => event.id);
  return redirect(`/event/${id}`);
};

export function AddEvent() {
  const { selectedUser, categories } = useEventContext();
  return (
    <div>
      <h1>Add Event</h1>
      <Form method="post">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" />
        <label htmlFor="description">Description:</label>
        <input type="text" name="description" />
        <label htmlFor="location">Location:</label>
        <input type="text" name="location" />
        <label htmlFor="image">Image URL:</label>
        <input type="text" name="image" />
        <label htmlFor="startTime">Start Time:</label>
        <input type="datetime-local" name="startTime" />
        <label htmlFor="endTime">End Time:</label>
        <input type="datetime-local" name="endTime" />
        <input type="hidden" name="createdBy" value={selectedUser.id} />
        <button type="submit">Add Event</button>
      </Form>
    </div>
  );
}
