import { createBrowserRouter } from "react-router";
import App from "../App";
import Signup from "../components/Auth/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
