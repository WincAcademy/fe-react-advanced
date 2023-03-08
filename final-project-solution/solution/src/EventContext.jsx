import { createContext, useContext, useReducer } from "react";

export const EventContext = createContext({});

EventContext.displayName = "EventContext";

// action types
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SET_USERS = "SET_USERS";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_EVENTS = "SET_EVENTS";

const eventReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        selectedUser: action.user,
      };
    case LOGOUT:
      return {
        ...state,
        selectedUser: null,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case SET_EVENTS:
      return {
        ...state,
        events: action.events,
      };
  }
};

const initialState = {
  selectedUser: null,
  users: [],
  events: [],
  categories: [],
};

export const EventContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, initialState);

  const setUsers = (users) => dispatch({ type: SET_USERS, users });
  const setCategories = (categories) =>
    dispatch({ type: SET_CATEGORIES, categories });
  const setEvents = (events) => dispatch({ type: SET_EVENTS, events });
  const login = (user) => dispatch({ type: LOGIN, user });
  const logout = () => dispatch({ type: LOGOUT });

  const actions = { login, logout, setUsers, setEvents, setCategories };

  return (
    <EventContext.Provider value={{ ...state, ...actions }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error(
      "useEventContext must be used within an EventContextProvider"
    );
  }
  return context;
};
