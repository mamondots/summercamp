import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import InstructorsPage from "../Pages/InstructorsPage/InstructorsPage";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import Error from "../Error/Error";
import Dasboard from "../Layout/Dasboard";
import AddClasses from "../Dasboard/AddClasses/AddClasses";
import MyClasses from "../Dasboard/MyClasses/MyClasses";
import SeletedClasses from "../Dasboard/SeletedClasses/SeletedClasses";
import ManageUsers from "../Dasboard/ManageUsers/ManageUsers";
import ManageClasses from "../Dasboard/ManageClasses/ManageClasses";
import Feedback from "../Dasboard/Feedback/Feedback";
import SeeFeedback from "../Dasboard/SeeFeedback/SeeFeedback";
import EnrollClass from "../Dasboard/EnrollClass/EnrollClass";
import Payment from "../Dasboard/Payment/Payment";


export const router = createBrowserRouter([
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
        path: '/instructorspage',
        element: <InstructorsPage></InstructorsPage>
      },
      {
        path: '/classespage',
        element: <ClassesPage></ClassesPage>
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singup',
        element: <Singup></Singup>
      },

    ]
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/dasboard',
        element: <Dasboard></Dasboard>,
        children: [
          {
            path: '/dasboard/addclasses',
            element: <AddClasses></AddClasses>
          },
          {
            path: '/dasboard/myclasses',
            element:<MyClasses></MyClasses>
          },
          {
            path: '/dasboard/seletedclasses',
            element:<SeletedClasses></SeletedClasses>
          },
          {
            path: '/dasboard/enrollclass',
            element:<EnrollClass></EnrollClass>
          },
          {
            path: '/dasboard/payment/:id',
            element:<Payment></Payment>
          },
          {
            path: '/dasboard/manageclasses',
            element:<ManageClasses></ManageClasses>
          },
          {
            path: '/dasboard/manageuser',
            element:<ManageUsers></ManageUsers>
          },
          {
            path: '/dasboard/feedback/:id',
            element:<Feedback></Feedback>
          },
          {
            path: '/dasboard/seefeedback/:id',
            element:<SeeFeedback></SeeFeedback>,
           // loader:({params}) => fetch(`http://localhost:5000/feedbacks/${params.id}`)
            
          }
        ]
      },

    ]
  }
]);