import { createBrowserRouter } from "react-router-dom";
import SignIn from '../../app/sign-in/SignIn';
import NotFound from '../../app/not-found/NotFound';
import SignUp from '../../app/sign-up/SignUp';
import User from '../../app/user/User';
import UserForm from '../../app/user/UserForm';
import UserLayout from '../../app/user/UserLayout';
import Home from "../../app/home/Home";
import TaskForm from "../../app/task/TaskForm";

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }, {
    path: '/signIn',
    element: <SignIn />
  }, {
    path: '/signUp',
    element: <SignUp />
  }, {
    path: '/task/:type?',
    element: <TaskForm />
  }, {
    path: '/user',
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <User />
      },
      {
        path: '/user/:id',
        element: <UserForm />
      }
    ]
  }, {
    path: '*',
    element: <NotFound />
  }
]);
