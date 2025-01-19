import AddProduct from "../pages/addProduct/AddProduct";
import Favorites from "../pages/favorites/Favorites";
import Home from "../pages/home/Home";
import UserRoot from "../pages/UserRoot";

const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
    ],
  },
];

export default ROUTES;
