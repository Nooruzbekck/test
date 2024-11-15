import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { SignUp } from "../components/auth/SignUp";
import { SignIn } from "../components/auth/SignIn";
import { NewTestForm } from "../components/admin/NewTestForm";
import { NewQuestionForm } from "../components/admin/NewQuestionForm";

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/sign-in"} />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/new-test",
      element: <NewTestForm />,
    },
    {
      path: "/new-question",
      element: <NewQuestionForm />,
    },
  ]);
  return <RouterProvider router={router} />;
};
