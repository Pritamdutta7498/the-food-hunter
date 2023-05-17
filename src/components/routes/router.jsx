import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Home/Blogs/Blogs";
import UserProfile from "../pages/Home/UserProfile";
import Access from "../layout/access";
import Register from "../pages/Access/Register";
import Login from "../pages/Access/Login";
import ChefDetails from "../pages/Home/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../layout/Error";
import Chefs from "../pages/Home/Home/Chefs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/chefs',
        element: <Chefs></Chefs>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/user-profile',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/chef/:id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
      }
    ]
  },
  {
    path: 'access',
    element: <Access></Access>,
    errorElement: <Error></Error>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  }
]);

export default router;