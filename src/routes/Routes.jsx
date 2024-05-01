import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Login from "./../Login/Login";
import Register from "./../Register/Register";
import AllTouristsSpot from "../AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../Home/AddTouristsSpot";
import MyList from "../Mylist/MyList";
import PrivateRoute from './PrivateRoute';
import ViewDetails from "../Home/ViewDetails";
import Update from "../Mylist/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/AllTouristsSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/AddTouristsSpot",
        element: <PrivateRoute>
          <AddTouristsSpot></AddTouristsSpot>
        </PrivateRoute>,
      },
      {
        path: "/MyList",
        element:<PrivateRoute>
          <MyList></MyList>
        </PrivateRoute> 
        ,
      },
      {
        path: "/ViewDetails/:id",
        element:<PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute> ,
        loader:({params})=>fetch(`http://localhost:5000/TouristsSpot/${params.id}`)
      },
      {
        path: "/update/:id",
        element:<PrivateRoute>
          <Update></Update>
        </PrivateRoute> ,
        loader:({params})=>fetch(`http://localhost:5000/TouristsSpot/${params.id}`)
      },
      
    ],
  },
]);
export default router;
