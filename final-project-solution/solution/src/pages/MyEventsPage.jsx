import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEventContext } from "../EventContext";

export const MyEventsPage = () => {
  const { events, selectedUser } = useEventContext();
  const visibleEvents = events.filter(
    (event) =>
      event.attendedBy.includes(selectedUser.id) ||
      event.createdBy === selectedUser.id
  );
  return (
    <>
      <Heading>List of events</Heading>
      {visibleEvents.map((event) => {
        const startTime = new Date(event.startTime);
        const endTime = new Date(event.endTime);
        const organizer = event.createdBy === selectedUser.id && "organizer";
        const attendee =
          event.attendedBy.includes(selectedUser.id) && "attendee";
        return (
          <div key={event.id}>
            <Link to={`/event/${event.id}`}>
              {startTime.toLocaleDateString()}, {startTime.toLocaleTimeString()}{" "}
              - {endTime.toLocaleTimeString()}: {event.title}
            </Link>{" "}
            ({[organizer, attendee].filter((v) => v).join(", ")})
          </div>
        );
      })}
    </>
  );
};
