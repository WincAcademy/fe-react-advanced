import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { EventPage, loader as eventLoader } from "./pages/EventPage";
import { MyEventsPage } from "./pages/MyEventsPage";
import { EventsPage, loader as eventsLoader } from "./pages/EventsPage";
import { Login, loader as loginLoader } from "./pages/Login";
import { Register, action as registerAction } from "./pages/Register";
import { AddEvent, action as addEventAction } from "./pages/AddEvent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, loader as rootLoader } from "./components/Root";
import { EventContextProvider } from "./EventContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: <EventsPage />,
        loader: eventsLoader,
      },
      {
        path: "/create",
        element: <AddEvent />,
        action: addEventAction,
      },
      {
        path: "/event/:eventId",
        element: <EventPage />,
        loader: eventLoader,
      },
      {
        path: "/my-events",
        element: <MyEventsPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: loginLoader,
  },
  {
    path: "/register",
    element: <Register />,
    action: registerAction,
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <EventContextProvider>
        <RouterProvider router={router} />
      </EventContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
