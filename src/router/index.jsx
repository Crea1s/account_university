import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Audience from "../pages/Audience";
import Grants from "../pages/Grants";
import Dormitory from "../pages/Dormitory";
import Events from "../pages/Events";
import Sections from "../pages/Sections";
import Account from "../pages/Account";
import General from "../pages/General";

export const privateRoutes = [
  { path: "/uunit-project/general", element: <General /> },
  { path: "/uunit-project/account", element: <Account /> },
  { path: "/uunit-project/sections", element: <Sections /> },
  { path: "/uunit-project/events", element: <Events /> },
  { path: "/uunit-project/dormitory", element: <Dormitory /> },
  { path: "/uunit-project/grants", element: <Grants /> },
  { path: "/uunit-project/audience", element: <Audience /> },
  { path: "/uunit-project/about", element: <About /> },
  { path: "/uunit-project/posts", element: <Posts /> },
  { path: "/uunit-project/posts/:id", element: <PostIdPage /> },
  { path: "/uunit-project/", element: <General /> },
  { path: "*", element: <Error /> },
];
export const publicRoutes = [
  { path: "/uunit-project/login", element: <Login /> },
  { path: "*", element: <Login /> },
];
