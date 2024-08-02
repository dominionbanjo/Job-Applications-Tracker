import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashBoardLayout,
  Error,
  AddJob,
  AllJobs,
  Stats,
  Profile,
  Admin,
  EditJob,
} from "./pages";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as addJobAction } from "./pages/AddJob";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as jobsLoader } from "./pages/AllJobs";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashBoardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: jobsLoader,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
          },
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
