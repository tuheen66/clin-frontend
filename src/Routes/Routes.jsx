import { createBrowserRouter } from "react-router";
import App from "../App";
import Signup from "../components/Auth/Signup/Signup";
import Login from "../components/Auth/Login/Login";
import ForgotPassword from "../components/Auth/ForgotPassword/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);
