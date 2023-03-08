import { Outlet, useNavigate, useLoaderData } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useEventContext } from "../EventContext";

export const loader = async () => {
  const users = await fetch("http://localhost:3000/users");
  const categories = await fetch("http://localhost:3000/categories");

  return { users: await users.json(), categories: await categories.json() };
};

export const Root = () => {
  const { users, categories } = useLoaderData();
  const { selectedUser, setUsers, setCategories } = useEventContext();
  const navigate = useNavigate();
  useEffect(() => {
    setUsers(users);
    setCategories(categories);
  }, [users, categories]);

  useEffect(() => {
    if (!selectedUser) {
      navigate("/login");
    }
  }, [selectedUser]);
  return (
    <Box>
      <Navigation />
      <Outlet />
    </Box>
  );
};
