import { Heading } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { useEventContext } from "../EventContext";

export const loader = async ({ params }) => {
  const event = await fetch(`http://localhost:3000/events/${params.eventId}`);

  return await event.json();
};

export const EventPage = () => {
  const event = useLoaderData();
  if (!event) {
    return <p>Event not found...</p>;
  }
  const { users } = useEventContext();
  const startTime = new Date(event.startTime);
  const endTime = new Date(event.endTime);

  return (
    <>
      <Heading>{event.title}</Heading>
      <p>
        ({startTime.toLocaleDateString()}, {startTime.toLocaleTimeString()} -{" "}
        {endTime.toLocaleTimeString()})
      </p>
      <p>
        Created by {users.find((user) => user.id === event.createdBy)?.name}
      </p>
      <p>{event.description}</p>
      <img src={event.image} />
      {event.attendedBy.length > 0 && (
        <p>
          Attended by:{" "}
          {event.attendedBy
            .map((attendee) => users.find((user) => user.id === attendee)?.name)
            .join(", ")}
        </p>
      )}
    </>
  );
};
