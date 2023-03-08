import { Heading } from "@chakra-ui/react";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useEventContext } from "../EventContext";

export const loader = async () => {
  const events = await fetch("http://localhost:3000/events");

  return { events: await events.json() };
};

export const EventsPage = () => {
  const { events } = useLoaderData();
  const { setEvents } = useEventContext();
  useEffect(() => {
    setEvents(
      events.sort((a, b) => new Date(a.startTime) - new Date(b.startTime))
    );
  }, [events]);
  return (
    <>
      <Heading>List of events</Heading>
      {events.map((event) => {
        const startTime = new Date(event.startTime);
        const endTime = new Date(event.endTime);
        return (
          <div key={event.id}>
            <Link to={`/event/${event.id}`}>
              {startTime.toLocaleDateString()}, {startTime.toLocaleTimeString()}{" "}
              - {endTime.toLocaleTimeString()}: {event.title}
            </Link>
          </div>
        );
      })}
    </>
  );
};
